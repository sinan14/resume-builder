import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  
  user:any={
    username:"",
    email:"",
    password:"",
    mobileno:"",
    star:""
  }

  constructor(private http:UserService) { }

  ngOnInit(): void {
   
    this.http.getusers().subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
    })
  }

  delete(user:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn-success',
        cancelButton: 'btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
        this.http.deleteuser(user._id)
      .subscribe((data) => {
        this.user = this.user.filter((p:any) => p !== user);
       
      })
      } 
      else if (
        
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          ':)',
          'error'
        )
      }
    })
    
    
}

}
