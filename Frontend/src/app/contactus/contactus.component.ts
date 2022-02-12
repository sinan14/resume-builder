import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contact={
    fname:"",
    lname:"",
    email:"",
    comment:""
  }

  constructor(public http:ContactusService,private router:Router) { }

  ngOnInit(): void {
  }
  contacted(){
    this.http.contactus(this.contact)
    .subscribe(function(){
      console.log("contactsend");
    })
    this.router.navigate(['']);
  }
  

}
