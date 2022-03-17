import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private _api: string = environment.baseUrl;
  ID2 = localStorage.getItem('UserId');
  Resumedata = {
    ID: '',
    name: '',
    email: '',
    phonenumber: '',
    dob: '',
    gender: '',
    address: '',
    photo: '',
    education: [{ degree: '', specialisation: '', year: '', name: '' }],
    job: '',
    jobname: '',
    jobyear: '',
    jobdes: '',
    skills: [{ skill: '' }],
    achievements: '',
    languages: [{ language: '' }],
  };

  constructor(private http: HttpClient) {}

  getlink(data: any) {
    const endPoint = `${this._api}/user/getlink`;
    return this.http.post(endPoint, data);
  }
}
