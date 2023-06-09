import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BookingComponent } from './pages/booking/booking.component';
import { SingleComponent } from './pages/single/single.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AutomationComponent } from './pages/automation/automation.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ApplicationComponent } from './pages/application/application.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleblogComponent } from './pages/singleblog/singleblog.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { StorepartnerComponent } from './pages/storepartner/storepartner.component';
import { UserComponent } from './pages/user/user.component';
import { PartnerpageComponent } from './pages/partnerpage/partnerpage.component';
// import { StorepartnerComponent } from './pages/storepartner/storepartner.component';
// import { AdminsigninComponent } from './pages/adminsignin/adminsignin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BookingComponent,
    SingleComponent,
    LoginComponent,
    RegisterComponent,
    AutomationComponent,
    PartnerComponent,
    CareersComponent,
    ApplicationComponent,
    BlogComponent,
    SingleblogComponent,
    AdminComponent,
    ForgotComponent,
    DoctorComponent,
    AppointmentComponent,
    LoginadminComponent,
    StorepartnerComponent,
    UserComponent,
    PartnerpageComponent,
    // StorepartnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
