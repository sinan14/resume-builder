import { Component, destroyPlatform, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { UserService } from '../../auth/services/user.service';
import Swal from 'sweetalert2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class UsersidenavComponent implements OnInit {
  ID2 = localStorage.getItem('UserId');
  drafts: any = '';
  draftId: any = '';

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(
    public _formService: FormService,
    public _userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}
  getActiveResume() {
    this._formService.getActiveResume();
  }
  makeInactive() {
    this._formService.updateResume({ status: false }, 123).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {}
    );
  }
  getInactiveResumes() {
    this._formService.getInactiveResume().subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === 'success') {
          this.drafts = JSON.parse(res.data);
        }
      },
      (error: any) => {}
    );
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  backup() {
    let timerInterval;
    Swal.fire({
      title: 'Backup Your Resume!!',
      html: 'Loading....',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });

    // this.form.changeuserdata(this.draftID).subscribe((data) => {
    //   // this.check.check(this.ID2);
    //   // this.check.LoggedIn();

    //   setTimeout(() => {
    //     this.router.navigate(['user/select-template']);
    //   }, 3001);
    // });
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
        this.makeInactive();
      } else if (result.isDenied) {
        this.deleteResumePermenently();
      }
    });
  }
  rateResumeBuilder(star) {
    this.selectedValue = star;
    this._userService.rateTheApp({ star }).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          document.getElementById('mess').innerHTML =
            'Thank you for Rating us..';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong please try again',
          });
        }
      },
      (error: any) => {}
    );
  }
  deleteResumePermenently() {}
}
