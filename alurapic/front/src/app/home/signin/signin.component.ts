import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { LoadingService } from '../../shared/components/loading/loading.service';

@Component({
    selector: 'app-vmessage',
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    @ViewChild('userNameInput') userNameInput:ElementRef<HTMLInputElement>
    public loginForm: FormGroup
    public fromUrl: string
    
    constructor(
        private formBuilder:FormBuilder, 
        private authService:AuthService,
        private router:Router,
        private platformDetectorService:PlatformDetectorService,
        private activatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit(): void {
        this.activatedRoute.queryParams
        .subscribe(params => {
            this.fromUrl = params.fromUrl
        })

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })

        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus()
    }

    login() {
        this.authService.authenticate(
            this.loginForm.get('userName').value,
            this.loginForm.get('password').value
        ).subscribe(response => {
            this.activatedRoute.queryParams
            .subscribe(params => {
                this.fromUrl
                    ? this.router.navigate([this.fromUrl])
                    : this.router.navigate(['user', response.body['name']])
            })
        }, error => {
            //alert('Usuário ou senha inválidos!')
            //console.log('error',error)
            this.loginForm.reset()
            // O "&&" funciona igual um "if" se a primeira condição for verdadeira então executa a segunda
            this.platformDetectorService.isPlatformBrowser() &&
                this.userNameInput.nativeElement.focus()
        })
    }
}