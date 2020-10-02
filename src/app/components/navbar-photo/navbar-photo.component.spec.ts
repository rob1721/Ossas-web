import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPhotoComponent } from './navbar-photo.component';

describe('NavbarPhotoComponent', () => {
  let component: NavbarPhotoComponent;
  let fixture: ComponentFixture<NavbarPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
