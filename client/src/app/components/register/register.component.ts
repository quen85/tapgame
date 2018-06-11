import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formData = {
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
    terms: undefined
  }
  public formError = undefined;

  constructor( private http: HttpClient, private router: Router ) {
    this.formError = {
      firstname: {
        error: false,
        message: undefined
      },
      lastname: {
        error: false,
        message: undefined
      },
      email: {
        error: false,
        message: undefined
      },
      password: {
        error: false,
        message: undefined
      },
      terms: {
        error: false,
        message: undefined
      }
    }
  }

  public handleSubmit = () => {

    if( this.formData.firstname === undefined || this.formData.firstname.length == 0 ) {
      this.formError.firstname.error = true;
      this.formError.firstname.message = `Firstname is needed`;
    }
    else{
      this.formError.firstname.error = false;
      this.formError.firstname.message = ``;
    }

    if( this.formData.lastname === undefined || this.formData.lastname.length == 0 ) {
      this.formError.lastname.error = true;
      this.formError.lastname.message = `Lastname is needed`;
    }
    else{
      this.formError.lastname.error = false;
      this.formError.lastname.message = ``;
    }

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

    if( this.formData.terms === undefined || this.formData.terms.length == 0 ) {
      this.formError.terms.error = true;
      this.formError.terms.message = `Necessary field`;
    }
    else{
      this.formError.terms.error = false;
      this.formError.terms.message = ``;
    }

    if(!this.formError.firstname.error && !this.formError.lastname.error && !this.formError.email.error && !this.formError.password.error){
      this.register(this.formData.firstname, this.formData.lastname, this.formData.email, this.formData.password)
    }
  }

  public register = (firstname, lastname, email, password) => {
    const body = {firstname: firstname, lastname: lastname, email: email, pwd: password}
    this.http.post('http://localhost:8080/api/users/', body)
        .toPromise()
        .then((res) => window.location.reload())
  }

  ngOnInit() {
  }

}
