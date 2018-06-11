import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData = {
    email: undefined,
    password: undefined
  }
  public formError = undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.formError = {
      email: {
        error: false,
        message: undefined
      },
      password: {
        error: false,
        message: undefined
      }
    }
  }

  public handleSubmit = () => {
    if( this.formData.email === undefined || this.formData.email.length == 0 ) {
      this.formError.email.error = true;
      this.formError.email.message = `Email is needed`;
    }
    else{
      this.formError.email.error = false;
      this.formError.email.message = ``;
    }

    if( this.formData.password === undefined || this.formData.password.length == 0 ) {
      this.formError.password.error = true;
      this.formError.password.message = `Password is needed`;
    }
    else{
      this.formError.password.error = false;
      this.formError.password.message = ``;
    }

    if(!this.formError.password.error && !this.formError.email.error){
      this.login(this.formData.email, this.formData.password)
    }
  }

  public login = (email: string, password: string) => {
    const body = {email: email, pwd: password}
    this.http.post('http://localhost:8080/login/', body)
        .toPromise()
        .then((user: any) => {
      localStorage.setItem('token', user.token)
      this.router.navigate(['me'])
    })
  }

  ngOnInit() {
  }

}
