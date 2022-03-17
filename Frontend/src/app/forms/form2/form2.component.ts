import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  constructor(public _formService: FormService, private router: Router) {}

  ngOnInit(): void {}
  resumedata2() {
    this.router.navigate(['user/form3']);
  }
  insertDegree() {
    this._formService.Resumedata.education.push({
      degree: '',
      specialisation: '',
      year: '',
      name: '',
    });
  }
  deleteDegree(edu) {
    const index: number = this._formService.Resumedata.education.indexOf(edu);
    if (index !== -1) {
      this._formService.Resumedata.education.splice(index, 1);
    }
    //this._formService.Resumedata.education.splice(i, 1);
  }
}
