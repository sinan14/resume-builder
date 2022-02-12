import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { Template1Component } from '../template1/template1.component';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sideBarOpen = true;
  ID2=localStorage.getItem("UserId");

  constructor(private router:Router,public form:FormService,public check:UserService) { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

 
  delete(){
    Swal.fire({
      title: 'Do you want to Save the Resume?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save Resume`,
      denyButtonText: `Delete it Permanently!`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Your Resumedata drafted :)',
          showConfirmButton: false,
          timer: 1500
        })
            this.form.draft(this.ID2)
      .subscribe((res:any) => {
      this.check.check(this.ID2);
      this.check.LoggedIn();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['user']);
    })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'error',
          title: 'Your Resume deleted!!',
          showConfirmButton: false,
          timer: 2000
        })
        this.form.deletedata(this.ID2)
              .subscribe((res:any) => {
                this.check.check(this.ID2);
          this.check.LoggedIn();
          setTimeout(() => {
            window.location.reload();
          }, 2001);
         this.router.navigate(['user']);
              })
              
      }
    })
}

  

}
