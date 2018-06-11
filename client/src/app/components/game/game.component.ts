import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelper } from 'angular2-jwt'
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  user: object;
  userLoaded: boolean;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: HttpClient, private router: Router) {
    this.userLoaded = false
    this.loadUser()
  }

  public loadUser = () => {
    const token = localStorage.getItem('token')
    const id = this.jwtHelper.decodeToken(token)._id

    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let options =  {
      headers: headers
    };

    this.http.get(`http://localhost:8080/api/users/${id}`, options)
        .toPromise()
        .then((res) => { this.user = res; this.userLoaded = true; })
  }

  public logout = () => {
    localStorage.removeItem('token')
    this.router.navigate((['']))
  }

  ngOnInit() {
  }

}
