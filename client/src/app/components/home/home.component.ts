import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLogin: boolean;
  showRegister: boolean;

  constructor(private router: Router) {
    this.showLogin = true
    this.showRegister = false
  }

  ngOnInit() {
    const token = localStorage.getItem('token')

    if(token)
      this.router.navigate((['me']))

  }

}
