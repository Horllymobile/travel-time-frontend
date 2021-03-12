import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare let $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe();
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
