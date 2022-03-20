import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  constructor(public _userService: UserService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('User'));
    this._userService.check(user._id);
    // this.check.LoggedIn();
  }
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
