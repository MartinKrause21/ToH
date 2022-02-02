import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { loggedUser } from '../hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private dataService: DataService,
    ) { }

  user : loggedUser[]= [];


  userLogin!: boolean;

  username!: string;
  password!: string;

  ngOnInit(): void {
    this.dataService.setStatus(this.userLogin);
  }

  model = new loggedUser( this.username, this.password);


  login() : void {
    if (this.model.username == 'user' && this.model.password == 'user') {
      
      this.dataService.setStatus(this.userLogin = false);

      console.log(this.model);

      this.router.navigate(["dashboard"]); 

    }
    else if (this.model.username == 'admin' && this.model.password == 'admin') { 
      
      this.dataService.setStatus(this.userLogin = true);

      console.log(this.model);

      this.router.navigate(["dashboard"]); 

    }

    else {
      alert("Invalid credentials");
    }

  }
  
  goBack(): void {
    this.location.back();
  }

 
}
