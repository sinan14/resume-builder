import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Template1Component } from './template1/template1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { UserService } from './user.service';
import { TemplateService } from './template.service';
import { Updateform1Component } from './updateform1/updateform1.component';
import { Updateform2Component } from './updateform2/updateform2.component';
import { Updateform3Component } from './updateform3/updateform3.component';
import { Updateform4Component } from './updateform4/updateform4.component';
import { AdminComponent } from './admin/admin.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { FormService } from './form.service';
import { SelectionComponent } from './selection/selection.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import {WebcamModule} from 'ngx-webcam';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogcreationComponent } from './blogcreation/blogcreation.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ResumemangerComponent } from './resumemanger/resumemanger.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersidenavComponent } from './usersidenav/usersidenav.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Template1Component,
    HomeComponent,
    ContactusComponent,
    BlogComponent,
    Updateform1Component,
    Updateform2Component,
    Updateform3Component,
    Updateform4Component,
    AdminComponent,
    Template2Component,
    Template3Component,
    SelectionComponent,
    AdminDashboardComponent,
    BlogcreationComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    MailboxComponent,
    ResumemangerComponent,
    AdminSidenavComponent,
    UsermanagerComponent,
    UsersidenavComponent,
    UserheaderComponent,
    UserhomeComponent,
    FooterComponent
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    WebcamModule,
    MatListModule,
    MatMenuModule,
    NgbModule
   
  ],
  providers: [UserService,TemplateService,FormService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
