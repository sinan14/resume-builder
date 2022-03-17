import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcreationComponent } from './blogcreation.component';

describe('BlogcreationComponent', () => {
  let component: BlogcreationComponent;
  let fixture: ComponentFixture<BlogcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
