import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { DashboardModule } from './views/layouts/dashboard/dashboard.module';
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
    //DashboardModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
