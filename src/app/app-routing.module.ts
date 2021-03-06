import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardGuard } from './guards/dashboard.guard';
import { CreateTravelComponent } from './views/create-travel/create-travel.component';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { DashboardComponent } from './views/layouts/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SettingsComponent } from './views/settings/settings.component';
import { TravelsComponent } from './views/travels/travels.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'dashboard', component: HomeComponent},
      {path: 'travels', component: TravelsComponent},
      {path: 'add', component: CreateTravelComponent},
      {path: 'info', component: InfoComponent},
      {path: 'settings', component: SettingsComponent}
    ],
    canActivate:[AuthGuard]
  },
  {path: 'login', component: LoginComponent, canActivate: [DashboardGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [DashboardGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
