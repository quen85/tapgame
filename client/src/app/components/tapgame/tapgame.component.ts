import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tapgame',
  templateUrl: './tapgame.component.html',
  styleUrls: ['./tapgame.component.css']
})
export class TapgameComponent implements OnInit {

  count: number
  hasStarted: boolean
  on: boolean

  constructor(private http: HttpClient, private router: Router) {
    this.count = 0
    this.hasStarted = false
    this.on = false
  }

  public playGame = () => {
    if(!this.count){
      this.hasStarted = true
      setTimeout(this.saveScore, 10000)
    }
    this.on = !this.on
    this.count++
  }

  public saveScore = () => {
    const token = localStorage.getItem('token')

    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let options =  {
      headers: headers
    };

    const body = {score: this.count, firstname: 'Quentin', lastname: 'Giraud', date: new Date}
    this.http.post('http://localhost:8080/api/taps/', body, options)
        .toPromise()
        .then((res) => {this.router.navigate(['tap'])})
  }

  ngOnInit() {
  }

}
