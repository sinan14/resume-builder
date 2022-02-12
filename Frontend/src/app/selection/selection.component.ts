import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { TemplateService } from '../template.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  
  ID2=localStorage.getItem("UserId");
  draft:any="";
  link={
    id:'',
    temp:'',
    accountid:''
  }

  constructor(public http:FormService, public router:Router,public check:UserService,public temp:TemplateService) { }

  ngOnInit(): void {
    
    this.check.check(this.ID2);
          this.check.LoggedIn();
        let userdata = localStorage.getItem("UserId");
        this.http.usercvdata(userdata).subscribe((data)=>{
          this.http.Updatedata=JSON.parse(JSON.stringify(data));
          
        })
        this.http.loaddraftdata(userdata).subscribe((data)=>{
          this.draft=JSON.parse(JSON.stringify(data));
        
        })
  }
  temp1(){
    this.router.navigate([`user/template1/${this.http.Updatedata._id}`]);
  }
  temp2(){
    this.router.navigate([`user/template2/${this.http.Updatedata._id}`]);
  }
  temp3(){
    this.router.navigate([`user/template3/${this.http.Updatedata._id}`]);
  }
  generatelink(temp){
       this.link.temp=temp;
       this.link.id=this.http.Updatedata._id;
       this.link.accountid=this.ID2;
    this.temp.getlink(this.link).subscribe((data)=>{
     
    })
    
  }
 

  

}
