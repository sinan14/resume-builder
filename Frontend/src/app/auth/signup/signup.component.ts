import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private _auth: UserService,
    public _router: Router,
    private _fb: FormBuilder
  ) {}
  private hasError: boolean = false;
  private emailReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.([a-z]{3})+(\.([a-z]{2,}))?$/;
  private phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  userForm: FormGroup = this._fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.pattern(this.emailReg)]],
    password: [null, [Validators.required]],
    passwordConfirm: [null],
    phone: [null, [Validators.required, Validators.pattern(this.phoneReg)]],
  });
  isValid(controlName: string) {
    return (
      (this.userForm.get(controlName)!.invalid &&
        this.userForm.get(controlName)!.touched) ||
      (this.hasError && this.userForm.get(controlName).invalid)
    );
  }

  signupUser() {
    this.userForm.patchValue({
      passwordConfirm: this.userForm.get('password').value,
    });
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      this.hasError = true;
      return;
    }
    this.hasError = false;
    this._auth.signup(this.userForm.value).subscribe((res) => {
      console.log(res);
      if (res.status === 'success') {
        localStorage.setItem('UserId', res.data.user._id);
        localStorage.setItem('token', res.token);
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
        });
        setTimeout(() => {
          this._router.navigate([`user`]);
        }, 2501);
      } else {
        Swal.fire({
          icon: 'info',
          title: 'something went wrong',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  }
}
