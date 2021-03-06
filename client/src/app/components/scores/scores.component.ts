import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores: any

  constructor(private http: HttpClient, private router: Router) {
    this.loadScores();
  }

  public loadScores = () => {
    const token = localStorage.getItem('token')

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const options =  {
      headers: headers
    };

    this.http.get('http://localhost:8080/api/taps/', options)
        .toPromise()
        .then((res) => this.scores = res);
  }

  public logout = () => {
    localStorage.removeItem('token')
    this.router.navigate((['']));
  }

  ngOnInit() {
  }

}
