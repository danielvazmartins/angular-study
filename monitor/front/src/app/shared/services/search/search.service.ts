import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const elasticUrl:string = 'http://localhost:9200/' 

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}

    searchTotalRequestsByPeriod(startDateTime: Date, endDateTime: Date) {
        // Numero de requisições agrupadas pelo status
        return this.http.post(`${elasticUrl}monitor/requests/_search`,{
            size: 0,
            aggs: {
                by_status: {
                    aggs: {
                        by_status: {
                            terms: {
                                field: 'status'
                            }
                        }
                    },
                    filter: {
                        range: {
                            dateTime: {
                                gte: startDateTime,
                                lte: endDateTime
                            }
                        }
                    }	
                }
            },
        }).pipe(map( (data: any) => {
            // Trata os dados antes de retornar
            if ( data ) {
                let requests = []
                data.aggregations.by_status.by_status.buckets.map(bucket => {
                    switch (bucket.key) {
                        case 1: 
                            requests.push({name: 'Sucesso', value: bucket.doc_count})
                            break;
                        case 2:
                            requests.push({name: 'Erros com impacto', value: bucket.doc_count})
                            break;
                        case 3:
                            requests.push({name: 'Erros sem impacto', value: bucket.doc_count})
                            break;
                    }
                })
                return { requests: requests }
            }
        }))
    }

    searchTotalRequestsByHour(startDateTime: Date, endDateTime: Date) {
        // Numero de requisições agrupadas pelo status
        return this.http.post(`${elasticUrl}monitor/requests/_search`,{
            size: 0,
            aggs: {
                filter_date: {
                    aggs: {
                        by_hour: {
                            date_histogram : {
                                field : 'dateTime',
                                interval : 'hour'
                            },
                            aggs: {
                                by_status: {
                                    terms: {
                                        field: 'status'
                                    }
                                }
                            }
                        }
                    },
                    filter: {
                        range: {
                            dateTime: {
                                gte: startDateTime,
                                lte: endDateTime
                            }
                        }
                    }
                }
            },
        }).pipe(map( (data: any) => {
            // Trata os dados antes de retornar
            if ( data ) {
                let requests = []
                data.aggregations.filter_date.by_hour.buckets.map( bucketByHour => {
                    let requestsByHours = {
                        dateTime: bucketByHour.key_as_string
                    }
                    
                    bucketByHour.by_status.buckets.map(bucketByStatus => {
                        switch (bucketByStatus.key) {
                            case 1: 
                            requestsByHours['success'] = bucketByStatus.doc_count
                            break;
                            case 2:
                            requestsByHours['error_with_impact'] = bucketByStatus.doc_count
                            break;
                            case 3:
                            requestsByHours['error_without_impact'] = bucketByStatus.doc_count
                            break;
                        }
                    })
                    requests.push(requestsByHours)
                })
                console.log(data)
                return { requests: requests }
            }
        }))
    }
}