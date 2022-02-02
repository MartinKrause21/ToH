import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userLogin!: boolean;

  constructor() { }

  setStatus(dataService:any){
    this.userLogin = dataService;
  }
  getStatus(){
    return this.userLogin;
  }
}
