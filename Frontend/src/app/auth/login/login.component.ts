import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _auth: UserService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}
  private hasError: boolean = false;
  private emailReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.([a-z]{3})+(\.([a-z]{2,}))?$/;
  userForm: FormGroup = this._fb.group({
    email: [null, [Validators.required, Validators.pattern(this.emailReg)]],
    password: [null, [Validators.required]],
    passwordConfirm: [null],
  });
  isValid(controlName: string) {
    return (
      (this.userForm.get(controlName)!.invalid &&
        this.userForm.get(controlName)!.touched) ||
      (this.hasError && this.userForm.get(controlName).invalid)
    );
  }

  loginUser() {
    this.userForm.patchValue({
      passwordConfirm: this.userForm.get('password').value,
    });
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      this.hasError = true;
      return;
    }
    this.hasError = false;
    this._auth.login(this.userForm.value).subscribe((res) => {
      console.log(res);
      if (res.status === 'success') {
        const user = res.data.user;
        delete user.role;
        localStorage.setItem('User', JSON.stringify(user));
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
