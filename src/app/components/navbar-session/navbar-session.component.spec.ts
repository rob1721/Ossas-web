import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSessionComponent } from './navbar-session.component';

describe('NavbarSessionComponent', () => {
  let component: NavbarSessionComponent;
  let fixture: ComponentFixture<NavbarSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
