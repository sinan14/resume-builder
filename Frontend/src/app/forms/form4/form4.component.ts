import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css'],
})
export class Form4Component {
  ID2 = localStorage.getItem('UserId');
  constructor(public _formService: FormService, private _router: Router) {}

  createResume() {
    const form = this._formService.Resumedata;
    const User = JSON.parse(localStorage.getItem('User'));
    //@ts-ignore
    form.user = User._id;
    console.log(form);
    this._formService.postResume(form).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          const resumeId = JSON.stringify(res.data._id);
          localStorage.setItem('resumeId', resumeId);
          this._router.navigate(['user/form5']);
        } else {
        }
      },
      (error) => {}
    );
  }
  insertSkill() {
    this._formService.Resumedata.skills.push({ skill: '' });
  }

  insertLanguage() {
    this._formService.Resumedata.languages.push({ language: '' });
  }
  deleteSkill(skill) {
    const index: number = this._formService.Resumedata.skills.indexOf(skill);
    if (index !== -1) {
      this._formService.Resumedata.skills.splice(index, 1);
    }
  }
  deleteLanguage(language) {
    const index: number =
      this._formService.Resumedata.languages.indexOf(language);
    if (index !== -1) {
      this._formService.Resumedata.languages.splice(index, 1);
    }
  }
}
