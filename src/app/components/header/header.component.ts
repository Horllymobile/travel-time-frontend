import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle: string| undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  getRouteTitle(): string | undefined{
    if(this.router.url === '/dashboard'){
      return 'dashboard'
    }

    if(this.router.url === '/travels'){
      return 'travels';
    }

    return ''
  }

}
