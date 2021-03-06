import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelsComponent } from '../../travels/travels.component'
import { HomeComponent } from '../../home/home.component';
import { ComponentsModule } from './../../../components/components.module'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    TravelsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    TravelsComponent,
    HomeComponent
  ]
})
export class DashboardModule { }
