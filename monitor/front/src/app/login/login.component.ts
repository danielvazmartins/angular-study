import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value)
    .subscribe(response => {
      if ( response['msg'] ) {
        alert(response['msg'] )
      } else {
        this.router.navigate([''])
      }
    })
  }

}
