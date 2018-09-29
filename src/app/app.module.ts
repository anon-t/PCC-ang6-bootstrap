import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegisterComponent } from './page/register/register.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

import { StepComponent } from './components/step/step.component';
import { OneComponent } from './page/one/one.component';
import { TwoComponent } from './page/two/two.component';
import { ThreeComponent } from './page/three/three.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProjectComponent } from './page/project/project.component';
import { UploadComponent } from './page/upload/upload.component';
import { ProjectFormComponent } from './page/project-form/project-form.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivateZoneComponent,
    PublicZoneComponent,
    DashboardComponent,
    StepComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    ProjectComponent,
    UploadComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }}),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
