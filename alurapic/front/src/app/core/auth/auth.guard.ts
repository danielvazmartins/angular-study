import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ):boolean|Observable<boolean>|Promise<boolean> {
        // Se não estiver logado redireciona para a home que vai para o login
        if ( !this.userService.isLogged() ) {
            this.router.navigate(
                [''], { 
                    // Passa a url que tentou acessar como parâmetro
                    queryParams: { 
                        fromUrl: state.url
                    }
                }
            )
            return false
        }
        return true
    }
}