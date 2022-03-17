import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
