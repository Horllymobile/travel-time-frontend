import { Component, OnInit } from '@angular/core';
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
    if(window.screen.width < 768){
      return true;
    }
    return false
  }

}
