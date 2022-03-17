import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin-Module/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './Admin-Module/admin-home/admin-home.component';
import { AdminComponent } from './Admin-Module/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogcreationComponent } from './blogcreation/blogcreation.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { Form3Component } from './forms/form3/form3.component';
import { Form4Component } from './forms/form4/form4.component';
import { Form5Component } from './forms/form5/form5.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { MailboxComponent } from './Admin-Module/mailbox/mailbox.component';
import { ResumemangerComponent } from './resumemanger/resumemanger.component';
import { SelectionComponent } from './selection/selection.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Template1Component } from './templates/template1/template1.component';
import { Template2Component } from './templates/template2/template2.component';
import { Template3Component } from './templates/template3/template3.component';
// import { Updateform1Component } from './update-forms/updateform1/updateform1.component';
// import { Updateform2Component } from './update-forms/updateform2/updateform2.component';
// import { Updateform3Component } from './update-forms/updateform3/updateform3.component';
// import { Updateform4Component } from './update-forms/updateform4/updateform4.component';
import { UserComponent } from './user-module/user/user.component';
import { UserhomeComponent } from './user-module/userhome/userhome.component';
import { UsermanagerComponent } from './user-module/usermanager/usermanager.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'Home', component: AdminHomeComponent },
      { path: 'manage-resumes', component: ResumemangerComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'inbox', component: MailboxComponent },
      { path: 'manage-users', component: UsermanagerComponent },
      { path: 'add-blog', component: BlogcreationComponent },
    ],
  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'blogs', component: BlogComponent },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserComponent,
    children: [
      { path: '', component: UserhomeComponent },
      { path: 'userhome', component: UserhomeComponent },
      { path: 'select-template', component: SelectionComponent },
      { path: 'form1', component: Form1Component },
      { path: 'form2', component: Form2Component },
      { path: 'form3', component: Form3Component },
      { path: 'form4', component: Form4Component },
      { path: 'form5', component: Form5Component },
      // { path: 'updateform1', component: Updateform1Component },
      // { path: 'updateform2', component: Updateform2Component },
      // { path: 'updateform3', component: Updateform3Component },
      // { path: 'updateform4', component: Updateform4Component },
      { path: 'template1/:userID', component: Template1Component },
      { path: 'template2/:userID', component: Template2Component },
      { path: 'template3/:userID', component: Template3Component },
    ],
  },
  { path: 'template1/:userID', component: Template1Component },
  { path: 'template2/:userID', component: Template2Component },
  { path: 'template3/:userID', component: Template3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
