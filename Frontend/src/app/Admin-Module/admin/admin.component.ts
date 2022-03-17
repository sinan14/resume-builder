import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  title = 'ResumeBuilderApp';
  sideBarOpen= true;

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

}
