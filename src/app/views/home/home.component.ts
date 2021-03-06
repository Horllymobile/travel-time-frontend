import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/models/travel';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';
import { TravelService } from './../../services/travels/travels.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: UserModel;
  travels!: Observable<Travel[]>;
  constructor(
    private travelService: TravelService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    console.log(this.userService.user);
  }


  getCurrentUser(){
    console.log('running');
  }

}
