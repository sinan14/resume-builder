import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user-module/user/user.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { Form3Component } from './forms/form3/form3.component';
import { Form4Component } from './forms/form4/form4.component';
import { Form5Component } from './forms/form5/form5.component';
import { Template1Component } from './templates/template1/template1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
// import { Updateform1Component } from './update-forms/updateform1/updateform1.component';
// import { Updateform2Component } from './update-forms/updateform2/updateform2.component';
// import { Updateform3Component } from './update-forms/updateform3/updateform3.component';
// import { Updateform4Component } from './update-forms/updateform4/updateform4.component';
import { AdminComponent } from './Admin-Module/admin/admin.component';
import { Template2Component } from './templates/template2/template2.component';
import { Template3Component } from './templates/template3/template3.component';
import { SelectionComponent } from './user-module/selection/selection.component';
import { TokenInterceptorService } from './auth/services/token-interceptor.service';
import { WebcamModule } from 'ngx-webcam';
import { AdminDashboardComponent } from './Admin-Module/admin-dashboard/admin-dashboard.component';
import { BlogcreationComponent } from './Admin-Module/blogcreation/blogcreation.component';
import { AdminHeaderComponent } from './Admin-Module/admin-header/admin-header.component';
import { AdminHomeComponent } from './Admin-Module/admin-home/admin-home.component';
import { MailboxComponent } from './Admin-Module/mailbox/mailbox.component';
import { ResumemangerComponent } from './resumemanger/resumemanger.component';
import { AdminSidenavComponent } from './Admin-Module/admin-sidenav/admin-sidenav.component';
import { UsermanagerComponent } from './user-module/usermanager/usermanager.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersidenavComponent } from './user-module/usersidenav/usersidenav.component';
import { UserheaderComponent } from './user-module/userheader/userheader.component';
import { UserhomeComponent } from './user-module/userhome/userhome.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterComponent } from './shared/footer/footer.component';

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
    // Updateform1Component,
    // Updateform2Component,
    // Updateform3Component,
    // Updateform4Component,
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
    FooterComponent,
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    WebcamModule,
    MatListModule,
    MatMenuModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
