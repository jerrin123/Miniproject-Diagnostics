import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
// import { AdminsigninComponent } from './pages/adminsignin/adminsignin.component';
import { ApplicationComponent } from './pages/application/application.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AutomationComponent } from './pages/automation/automation.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleComponent } from './pages/single/single.component';
import { SingleblogComponent } from './pages/singleblog/singleblog.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'booking',component:BookingComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'automation',component:AutomationComponent
  },
  {
    path:'partner',component:PartnerComponent
  },
  {
    path:'careers',component:CareersComponent
  },
  {
    path:'application',component:ApplicationComponent
  },
  {
    path:'blog',component:BlogComponent
  },
  {
    path:'singleblog',component:SingleblogComponent
  },
  {
  path:'forgot',component:ForgotComponent
  },
  {
    path:'doctor',component:DoctorComponent
  },
  {
    path:'appointment',component:AppointmentComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'loginadmin',component:LoginadminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
