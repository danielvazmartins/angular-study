import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // O BehaviorSubject reenvia a última notificação caso alguem faça o subcribe depois
    private userSubject = new BehaviorSubject<User>(null)
    private userName:string

    constructor(
        private tokenService:TokenService) {
            tokenService.hasToken() && this.decodeAnNotify()
        }

    setToken(token:string) {
        this.tokenService.setToken(token)
        this.decodeAnNotify()
    }

    getUser():Observable<User> {
        return this.userSubject.asObservable()
    }

    getUserName() {
        return this.userName
    }

    decodeAnNotify() {
        const accessToken = this.tokenService.getToken()
        const user = jwt_decode(accessToken) as User
        this.userSubject.next(user)
        this.userName = user.name
    }

    logout() {
        this.tokenService.removeToken()
        this.userSubject.next(null)
    }

    isLogged() {
        return this.tokenService.hasToken()
    }
}