import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardModule } from './views/layouts/dashboard/dashboard.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/layouts/dashboard/dashboard.component';
import { ComponentsModule } from './components/components.module';
import { CreateTravelComponent } from './views/create-travel/create-travel.component';
import { InfoComponent } from './views/info/info.component';
import { SettingsComponent } from './views/settings/settings.component';
import { EditTravelComponent } from './views/edit-travel/edit-travel.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemHeroService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateTravelComponent,
    InfoComponent,
    SettingsComponent,
    EditTravelComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
   // HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
   JwtModule.forRoot({
     config: {
       tokenGetter: ()=> {
         return localStorage.getItem('accessToken');
       }
     }
   }),
    ComponentsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
