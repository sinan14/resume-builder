import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _api: string = environment.baseUrl;
  constructor(private http: HttpClient, private _formService: FormService) {}
  login(user: any) {
    const endPoint = `${this._api}/user/login`;
    return this.http.post<any>(endPoint, user);
  }
  signup(user: any) {
    const endPoint = `${this._api}/user/signup`;
    console.log(user);
    return this.http.post<any>(endPoint, user);
  }

  getusers() {
    const endPoint = `${this._api}/user`;
    return this.http.get(endPoint);
  }
  rateTheApp(star: any) {
    const endPoint = `${this._api}/user/updateMe`;
    return this.http.patch(endPoint, star);
  }

  deleteuser(id: any) {
    return this.http.delete('http://localhost:3000/deleteuser/' + id);
  }
  getmessage() {
    return this.http.get('http://localhost:3000/getmessage');
  }
  messageback(mess: any) {
    return this.http.post('http://localhost:3000/messageback', mess);
  }
  // checkForActiveResume

  check(id: any) {
    const endPoint = `${this._api}/resume/${id}/get-user-resumes?active=false`;
    return this.http.get(endPoint).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === 'success') {
          if (res.data.length > 0) {
            localStorage.setItem('checked', 'hasActiveResume');
            this._formService.Updatedata = res.data[0];
          }
        }
      },
      (error: any) => {}
    );
  }

  LoggedIn() {
    const x = localStorage.getItem('checked');
    if (x == 'hasActiveResume') {
      return true;
    } else {
      return false;
    }
  }
}
