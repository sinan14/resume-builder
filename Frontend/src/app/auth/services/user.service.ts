import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _api: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
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
    return this.http.get('http://localhost:3000/getusers');
  }
  rate(star: any) {
    return this.http
      .put('http://localhost:3000/user/rate', star)
      .subscribe((data) => {
        console.log(data);
      });
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

  check(data: any) {
    this.http.get('http://localhost:3000/check/' + data).subscribe((res) => {
      if (res) {
        var x = 'checked';
        localStorage.setItem('check', x);
      } else {
        localStorage.removeItem('check');
      }
    });
  }

  LoggedIn() {
    var x = localStorage.getItem('check');
    if (x == 'checked') {
      console.log('ss');
      return true;
    } else {
      return false;
    }
  }
}
