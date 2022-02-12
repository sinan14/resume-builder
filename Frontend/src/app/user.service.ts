import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ID2=localStorage.getItem("UserId");
  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
  }
  signup(user:any){
    return this.http.post<any>("http://localhost:3000/signup",user)
  }
  check(data:any){
    this.http.get("http://localhost:3000/check/"+data).subscribe(res=>{
    if(res){
      var x="checked";
      localStorage.setItem('check',x);
    }
    else{
      localStorage.removeItem('check');
    }
   })

}

  LoggedIn(){
    var x=localStorage.getItem('check')
    if(x=='checked'){
      console.log("ss");
      return  true;
      
    }
    else{
      
      return false;
    }
    
  }

  getusers(){
    return this.http.get("http://localhost:3000/getusers");
  }
   rate(star:any)
  {
    return this.http.put("http://localhost:3000/user/rate",star)
    .subscribe(data =>{console.log(data)});
  }

  deleteuser(id:any){
    return this.http.delete("http://localhost:3000/deleteuser/"+id);
  }
  getmessage(){
    return this.http.get("http://localhost:3000/getmessage");
  }
  messageback(mess:any){
    return this.http.post("http://localhost:3000/messageback",mess);
  }
}
