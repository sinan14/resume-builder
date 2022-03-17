import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
})
export class Template1Component implements OnInit {
  Resumedata = {
    ID: '',
    name: '',
    email: '',
    phonenumber: '',
    dob: '',
    gender: '',
    address: '',
    about: '',
    photo: '',
    video: '',
    education: [{ degree: '', specialisation: '', year: '', name: '' }],
    job: [{ jobname: '', companyname: '', jobyear: '', jobdes: '' }],
    skills: [{ skill: '' }],
    achievements: '',
    languages: [{ language: '' }],
  };

  constructor(
    public _formService: FormService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    const resumeId = JSON.parse(localStorage.getItem('resumeId'));

    this._formService.getResumeById(resumeId).subscribe(
      (res: any) => {
        this.Resumedata = JSON.parse(JSON.stringify(res.data));
        console.log(this.Resumedata);
      },
      (error: any) => {}
    );
  }

  public generatePdf() {
    var data = document.getElementById('makepdf');
    html2canvas(data, { scrollY: -window.scrollY }).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }
}
