import { Component, OnInit } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  isMobileMenu() {
    // if ($(window).width() > 768) {
    //   console.log($(window).width());
    //   return false;
    // }
    // console.log($(window).width());
    // return true;
};

}
