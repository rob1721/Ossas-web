import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoScreenComponent } from './add-photo-screen.component';

describe('AddPhotoScreenComponent', () => {
  let component: AddPhotoScreenComponent;
  let fixture: ComponentFixture<AddPhotoScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhotoScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
