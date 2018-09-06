import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

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

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false')
        formData.append('imageFile', file, 'file.jpg');
        return this.http.post(
            API + 'photos/upload', formData
        );
    }    

    findById(photoId: number) {
        return this.http.get<Photo>(API + 'photos/' + photoId)
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(API + 'photos/' + photoId + '/comments')
    }

    addComments(photoId: number, commentText: string) {
        return this.http.post<PhotoComment[]>(API + 'photos/' + photoId + '/comments', { commentText })
    }

    removePhoto(photoId: number) {
        return this.http.delete(API + 'photos/' + photoId)
    }
}