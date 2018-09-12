import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { UserNameEqualPassword } from './username-equal-password.validator';

@Component({
    templateUrl: './signup.component.html',
    // Importa esse serviço aqui porque está sem o "providedIn 'root'""
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
    @ViewChild('emailInput') emailInput : ElementRef<HTMLInputElement>
    public signUpForm: FormGroup
    
    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService :PlatformDetectorService) {}

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            userName: ['', 
                [
                    Validators.required,
                    //Validators.pattern(/^[a-z0-9_\-]+$/), // Validador usando pattern
                    lowerCaseValidator, // Validador customizado
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ], this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        }, {
            validator: UserNameEqualPassword
        })
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus()
    }

    signup() {
        if ( this.signUpForm.valid && !this.signUpForm.pending ) {
            const newUser = this.signUpForm.getRawValue() as NewUser
            this.signUpService.signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                error => console.log(error)
            )
        }
    }
}