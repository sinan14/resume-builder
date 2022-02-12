import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };
  constructor(private http: UserService, private router: Router) {}

  ngOnInit(): void {}
  loginUser() {
    this.http.login(this.user).subscribe((res) => {
      if (res.boolean) {
        localStorage.setItem('UserId', res.ID);
        localStorage.setItem('token', res.token);
        Swal.fire({
          icon: 'success',
          title: 'ok',
          showConfirmButton: false,
          timer: 1000,
        });
        this.router.navigate([`${res.nav}`]);
      } else {
        Swal.fire({
          icon: 'error',
          title: res.data,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
}
