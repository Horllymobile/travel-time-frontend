import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
declare const $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  isMobile():boolean{
    if($(window).width() < 768){
      return true;
    }
    return false
  }

}
