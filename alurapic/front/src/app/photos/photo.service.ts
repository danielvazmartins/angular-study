import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from './photo/photo';

@Injectable()
export class PhotoService {
    constructor(public http: HttpClient) {

    }

    listPhotosFromUser(userName: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`)
    }
}