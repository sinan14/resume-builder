import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  contactus(contacts:any){
    return this.http.post<any>("http://localhost:3000/contactus",contacts)
  }
}
