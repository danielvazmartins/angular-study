import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const ServerLogUrl = environment.ServerLogUrl

@Injectable()
export class ServerLogService {

    constructor(private http: HttpClient) {}

    log(serverLog: ServerLog): Observable<any> {
        return this.http.post( ServerLogUrl + '/infra/log', serverLog)
    }
}