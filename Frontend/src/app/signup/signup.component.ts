import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user={
    username:"",
    email:"",
    password:"",
    mobileno:"",
    star:""
  }

  constructor(private http:UserService,public rou:Router) { }

  ngOnInit(): void {
  }
  signupUser(){
      var x='';
    this.http.signup(this.user)
    .subscribe((res)=>{
    
      if(res.boolean){
       
        Swal.fire({
          icon: 'success',
          title: res.alert,
          showConfirmButton: false,
          timer: 2500
        })
       setTimeout(() => {
        this.rou.navigate([`${res.nav}`]);
       }, 2501);
      }
      else{
        Swal.fire({
          icon: 'info',
          title: res.alert,
          showConfirmButton: false,
          timer: 3000
        })
      }
    })
    
   
   
 }

}
