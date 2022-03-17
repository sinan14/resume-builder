import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css'],
})
export class Form3Component implements OnInit {
  constructor(public _formService: FormService, private router: Router) {}

  ngOnInit(): void {}
  resumedata3() {
    this.router.navigate(['user/form4']);
  }
  insertJob() {
    this._formService.Resumedata.job.push({
      jobname: '',
      companyname: '',
      jobyear: '',
      jobdes: '',
    });
  }
  deleteJob(job) {
    const index: number = this._formService.Resumedata.job.indexOf(job);
    if (index !== -1) {
      this._formService.Resumedata.job.splice(index, 1);
    }
    //this._formService.Resumedata.job.splice(i, 1);
  }
}
