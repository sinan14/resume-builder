import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _api: string = environment.baseUrl;
  ID2 = localStorage.getItem('UserId');
  public resumeId: any = '';
  Resumedata = {
    name: '',
    email: '',
    phonenumber: '',
    dob: '',
    gender: '',
    address: '',
    about: '',
    photo: '',
    video: '',
    education: [{ degree: '', specialisation: '', year: '', name: '' }],
    job: [{ jobname: '', companyname: '', jobyear: '', jobdes: '' }],
    skills: [{ skill: '' }],
    achievements: '',
    languages: [{ language: '' }],
  };

  Updatedata = {
    _id: '',
    name: '',
    email: '',
    phonenumber: '',
    dob: '',
    gender: '',
    address: '',
    about: '',
    photo: '',
    video: '',
    education: [{ degree: '', specialisation: '', year: '', name: '' }],
    job: [{ jobname: '', companyname: '', jobyear: '', jobdes: '' }],
    skills: [{ skill: '' }],
    achievements: '',
    languages: [{ language: '' }],
  };

  constructor(private _http: HttpClient) {}

  postResume(form: any) {
    const endPoint = `${this._api}/resume`;
    return this._http.post(endPoint, form);
  }
  updateResume(form: any, resueme_id: any) {
    const endPoint = `${this._api}/resume/${resueme_id}`;
    return this._http.patch(endPoint, form);
  }
  // updateResume(form: any, id) {
  //   const endPoint = `${this._api}/resume/${id}`;
  //   return this._http.patch(endPoint, form);
  // }
  getResumeById(resueme_id) {
    const endPoint = `${this._api}/resume/${resueme_id}`;
    return this._http.get(endPoint);
  }

  updatedata(form: any) {
    console.log('client update');
    const endPoint = `${this._api}/updateform`;
    return this._http.put(endPoint, form).subscribe((data) => {
      console.log(data);
    });
  }

  deleteResume(id: any) {
    const endPoint = `${this._api}/resume/${id}`;
    return this._http.delete(endPoint);
  }

  uploadvideo(data: any) {
    const endPoint = `${this._api}/uploadvideo`;
    return this._http.put(endPoint, data).subscribe((data) => {
      console.log(data);
    });
  }
  getlink(data: any) {
    const endPoint = `${this._api}/user/getlink`;
    return this._http.post(endPoint, data);
  }
  contactus(contacts: any) {
    const endPoint = `${this._api}/contact`;
    return this._http.post<any>(endPoint, contacts);
  }
  getActiveResume() {
    const user = JSON.parse(localStorage.getItem('User'));
    const endPoint = `${this._api}/resume/${user._id}/get-user-resumes?active=false`;
    return this._http.get(endPoint).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === 'success') {
          this.Updatedata = res.data[0];
        }
      },
      (error: any) => {}
    );
  }
  getInactiveResume() {
    const endPoint = `${this._api}/resume?active=false`;
    return this._http.get(endPoint);
  }
}
