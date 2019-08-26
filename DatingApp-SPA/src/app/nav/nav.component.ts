import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => { console.log('loggedin successfully'); },
      error => { console.log('failed to login'); }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
