import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  form: FormGroup = this._fb.group({
    fname: [null, [Validators.required, Validators.minLength(3)]],
    lname: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required]],
    comment: [null, [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    public _contactService: FormService,
    private router: Router,
    private _fb: FormBuilder
  ) {}
  private hasError: boolean = false;

  isvalid(controlName: string) {
    return (
      (this.form.get(controlName)!.invalid &&
        this.form.get(controlName)!.touched) ||
      (this.hasError && this.form.get(controlName).invalid)
    );
  }

  contact() {
    if (this.form.invalid) {
      this.hasError = true;
      return;
    }
    this._contactService.contactus(this.form.value).subscribe((res) => {
      console.log(res);
      if (res.status === 'success') {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          title: 'Thank you for your feedback',
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'something went wrong',
        });
      }
      this.router.navigate(['']);
    });
  }
}
