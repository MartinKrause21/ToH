import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    ) { }

  username!: string;
  password!: string;

  ngOnInit(): void {
  }


  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin"]);
    }
    else {
      alert("Invalid credentials");
    }

    if(this.username == 'user' && this.password == 'user'){
      this.router.navigate(["user"]);
     }
     else {
       alert("Invalid credentials");
     }
  }
  
  goBack(): void {
    this.location.back();
  }

}
