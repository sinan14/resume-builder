import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('UserId')
    this.router.navigate([''])
   }

}
