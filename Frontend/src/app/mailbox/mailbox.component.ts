import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class MailboxComponent implements OnInit {
  sendemail = {
    email: '',
    mess: '',
  };

  contact: any = {
    fname: '',
    lname: '',
    email: '',
    comment: '',
  };

  constructor(
    private http: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.http.getmessage().subscribe((data) => {
      this.contact = JSON.parse(JSON.stringify(data));
    });
  }

  open(content, i) {
    this.sendemail.email = i.email;
    this.modalService.open(content, { centered: true });
  }
  messageback() {
    this.http.messageback(this.sendemail).subscribe((res) => {});
    Swal.fire({
      icon: 'success',
      title: 'Message send',
      showConfirmButton: false,
      timer: 1000,
    });
    this.sendemail.mess = '';
  }
}
