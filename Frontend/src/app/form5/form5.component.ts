import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {
 
  video={
    ID:localStorage.getItem("UserId"),
    Url:''
  }
  selectedimage:any =null;
  constructor(public http:FormService,private router:Router,private form:UserService) { }

  ngOnInit(): void {
    
  }
  selectImage(event:any){
    this.selectedimage =event.target.files[0];
   }
 upload(){
   const fd= new FormData;
   fd.append('image',this.selectedimage,this.selectedimage.name);
   this.http.image(fd);
   Swal.fire({
    icon: 'success',
    title: 'Photo Uploded',
    showConfirmButton: false,
    timer: 1500
  })
   
  }

  resumedata5(){
    this.router.navigate(['user/form5']);
  }
  uploadvideo(){
    this.http.uploadvideo(this.video);
    Swal.fire({
      icon: 'success',
      title: 'Url Added',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      this.router.navigate(['user/select-template']);
    }, 1500);
  }
  

}
