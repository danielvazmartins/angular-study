import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    logout() {
        this.authService.logout()
        .subscribe(() => {
            this.router.navigate(['/login'])
        })
    }
}