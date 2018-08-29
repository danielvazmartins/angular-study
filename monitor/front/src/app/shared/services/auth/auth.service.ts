import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(username:string, password:string) {
        return new Observable(observer => {
            localStorage.setItem('username',username)
            observer.next({
                username: username,
            })
            observer.complete()
        })
    }

    logout() {
        return new Observable(observer => {
            localStorage.removeItem('username')
            observer.next({})
            observer.complete()
        })
    }

    isLogged() {
        return !!localStorage.getItem('username')
    }
}