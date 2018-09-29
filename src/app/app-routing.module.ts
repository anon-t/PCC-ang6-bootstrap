import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { OneComponent } from './page/one/one.component';
import { TwoComponent } from './page/two/two.component';
import { ThreeComponent } from './page/three/three.component';
import { ProjectComponent } from './page/project/project.component';
import { UploadComponent } from './page/upload/upload.component';
import { ProjectFormComponent } from './page/project-form/project-form.component';

const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }, {
    path: 'admin',
    component: PrivateZoneComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'project-list',
        component: ProjectComponent
      }, {
        path: 'project-form/:code',
        component: ProjectFormComponent
      }
    ]
  }, {
    path: 'one',
    component: OneComponent
  }, {
    path: 'two',
    component: TwoComponent
  }, {
    path: 'three',
    component: ThreeComponent
  }, {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
