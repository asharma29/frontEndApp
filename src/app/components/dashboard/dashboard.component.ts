import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit{
  constructor( private router: Router){

  }
  ngOnInit(){

  }

  login()  {

    console.log("loginWorks");
  }

  signin(){
   
  }
  
}
