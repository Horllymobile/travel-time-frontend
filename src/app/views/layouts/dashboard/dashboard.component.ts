import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMobile():boolean{
    if($(window).width() > 620){
      console.log('desktop')
      return true
    }
    console.log('mobile')
    return false;
  }

}
