import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
// import { UserService } from '../../auth/services/user.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css'],
})
export class Form5Component {
  private hasErrorImage: boolean = false;
  private hasErrorVideo: boolean = false;

  imageForm: FormGroup = new FormGroup({
    photo: new FormControl(null, Validators.required),
  });
  videoForm: FormGroup = new FormGroup({
    video: new FormControl(null, Validators.required),
  });
  constructor(public _formService: FormService, private router: Router) {}

  selectImage(event: any) {
    this.imageForm.patchValue({
      photo: event.target.files[0],
    });
  }
  uploadImage() {
    const resumeId = JSON.parse(localStorage.getItem('resumeId'));
    const fd = new FormData();
    fd.append('photo', this.imageForm.get('photo').value);
    this._formService.updateResume(fd, resumeId).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Photo uploaded',
          });
        }
      },
      (error: any) => {}
    );
  }

  uploadvideo() {
    const resumeId = JSON.parse(localStorage.getItem('resumeId'));

    this._formService.updateResume(this.videoForm.value, resumeId).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'video uploaded',
          }).then(() => {
            this.router.navigate(['user/select-template']);
          });
        }
      },
      (error: any) => {}
    );
  }
  invalidPhoto(controlName: string) {
    return (
      (this.imageForm.get(controlName)!.invalid &&
        this.imageForm.get(controlName)!.touched) ||
      (this.hasErrorImage && this.imageForm.get(controlName).invalid)
    );
  }
  invalidVideo(controlName: string) {
    return (
      (this.videoForm.get(controlName)!.invalid &&
        this.videoForm.get(controlName)!.touched) ||
      (this.hasErrorVideo && this.videoForm.get(controlName).invalid)
    );
  }
}
