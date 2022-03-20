import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { UserService } from '../../auth/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  sideBarOpen = true;
  // ID2 = localStorage.getItem('UserId');

  constructor(
    private router: Router,
    public _formService: FormService,
    public check: UserService
  ) {}

  ngOnInit(): void {
    const resumeId = JSON.parse(localStorage.getItem('resumeId'));
    console.log(localStorage.getItem('resumeId'));
    console.log(resumeId);

    this._formService.getResumeById(resumeId).subscribe((res: any) => {
      if (res.status === 'success') {
        console.log(res);
        this._formService.Updatedata = JSON.parse(JSON.stringify(res.data));
      }
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  delete() {
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
          timer: 1500,
        });
        // this._formService.draft(this.ID2).subscribe((res: any) => {
        //   this.check.check(this.ID2);
        //   this.check.LoggedIn();
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 2000);
        //   this.router.navigate(['user']);
        // });
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'error',
          title: 'Your Resume deleted!!',
          showConfirmButton: false,
          timer: 2000,
        });
        this._formService.deleteResume('resume_id').subscribe((res: any) => {
          setTimeout(() => {
            window.location.reload();
          }, 2001);
          this.router.navigate(['user']);
        });
      }
    });
  }
}
