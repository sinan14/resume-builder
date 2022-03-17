import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';
import { TemplateService } from '../services/template.service';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
})
export class SelectionComponent implements OnInit {
  ID2 = localStorage.getItem('UserId');
  draft: any = '';

  constructor(
    public _formService: FormService,
    public router: Router,
    public _userService: UserService,
    public _templateService: TemplateService
  ) {}

  ngOnInit(): void {
    // this._userService.check(this.ID2);
    // this._userService.LoggedIn();
    this._formService
      .getResumeById(this._formService.resumeId)
      .subscribe((res: any) => {
        this._formService.Updatedata = JSON.parse(JSON.stringify(res.data));
      });
  }
  temp1() {
    this.router.navigate([
      `user/template1/${this._formService.Updatedata._id}`,
    ]);
  }
  temp2() {
    this.router.navigate([
      `user/template2/${this._formService.Updatedata._id}`,
    ]);
  }
  temp3() {
    this.router.navigate([
      `user/template3/${this._formService.Updatedata._id}`,
    ]);
  }
  generatelink(templateNo) {
    this._templateService
      .getlink({ templateNo, cvId: this._formService.Updatedata._id })
      .subscribe(
        (data) => {},
        (error: any) => {}
      );
  }
}
