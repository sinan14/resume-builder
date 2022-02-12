import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumemangerComponent } from './resumemanger.component';

describe('ResumemangerComponent', () => {
  let component: ResumemangerComponent;
  let fixture: ComponentFixture<ResumemangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumemangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumemangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
