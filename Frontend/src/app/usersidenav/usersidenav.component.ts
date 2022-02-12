import { Component, destroyPlatform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UsersidenavComponent implements OnInit {
  ID2=localStorage.getItem("UserId");
  draft:any="";
  draftID:any="";

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  starvalue={
    value:'',
    ID:localStorage.getItem("UserId")
  }

  constructor(private router:Router,public form:FormService,public check:UserService,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    let userdata = localStorage.getItem("UserId");
    this.form.loaddraftdata(userdata).subscribe((data)=>{
      this.draft=JSON.parse(JSON.stringify(data));
    
    })
  }

  open(content:any) {
    
    this.modalService.open(content, { centered: true });
  }

  backup(){
    let timerInterval
    Swal.fire({
      title: 'Backup Your Resume!!',
      html: 'Loading....',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()
          if (content) {
            const b = content.querySelector('b')
           
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    
        this.form.changeuserdata(this.draftID).subscribe((data)=>{
          this.check.check(this.ID2);
          this.check.LoggedIn();
          
          setTimeout(() => {
            this.router.navigate(['user/select-template']); 
            
          }, 3001);
        
        })
  }

  delete(){
    Swal.fire({
      title: 'Do you want to Save the Resume?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save Resume`,
      denyButtonText: `Delete it Permanently!`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Your Resumedata drafted :)',
          showConfirmButton: false,
          timer: 1500
        })
            this.form.draft(this.ID2)
      .subscribe((res:any) => {
      this.check.check(this.ID2);
      this.check.LoggedIn();
      setTimeout(() => {
        window.location.reload();
      }, 1501);
      this.router.navigate(['user']);
    })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'error',
          title: 'Your Resume deleted!!',
          showConfirmButton: false,
          timer: 2000
        })
        this.form.deletedata(this.ID2)
              .subscribe((res:any) => {
                this.check.check(this.ID2);
          this.check.LoggedIn();
          setTimeout(() => {
            window.location.reload();
          }, 2001);
         this.router.navigate(['user']);
              })
              
      }
    })
}
countStar(star) {
  this.selectedValue = star;
  this.starvalue.value=star;
  console.log('Value of star', star);
  this.check.rate(this.starvalue);
  document.getElementById('mess').innerHTML='Thank you for Rating us..';
  
}

}
