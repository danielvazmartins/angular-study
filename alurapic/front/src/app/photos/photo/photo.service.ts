import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from './photo';

const API = 'http://localhost:3000/'

// Utiliza o providedIn: 'root' para deixar disponibilizar o serviço em qualquer lugar sem utilizar o provider
@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(public http: HttpClient) {

    }

    listPhotosFromUser(userName: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${API}${userName}/photos`)
    }

    listPhotosFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
        let params = new HttpParams().append('page', page.toString())
        return this.http.get<Photo[]>(`${API}${userName}/photos`, { params })
    }
}