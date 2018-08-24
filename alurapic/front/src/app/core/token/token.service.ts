import { Injectable } from '@angular/core';

const KEY = 'accessToken'

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    hasToken() {
        // !! Converte o retorno que pode ser null ou uma string para boolean
        return !!this.getToken()
    }

    setToken(token:string) {
        localStorage.setItem(KEY, token)
    }

    getToken() {
        return localStorage.getItem(KEY)
    }

    removeToken() {
        localStorage.removeItem(KEY)
    }
}