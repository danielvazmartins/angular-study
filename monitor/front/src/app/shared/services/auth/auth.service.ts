import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { users } from './users.mock';

const validUsers = users

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    login(username:string, password:string) {
        return new Observable(observer => {
            
            let checkUser = validUsers.find(user => {
                return (user.userName === username && user.password === password)
            })
            if ( checkUser ) {
                localStorage.setItem('username',username)
                observer.next({
                    username: username,
                })
            } else {
                observer.next({
                    msg: 'Usuário ou senha inválidos!'
                })
            }

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