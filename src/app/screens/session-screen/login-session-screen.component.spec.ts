import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSessionScreenComponent } from './login-session-screen.component';

describe('LoginSessionScreenComponent', () => {
  let component: LoginSessionScreenComponent;
  let fixture: ComponentFixture<LoginSessionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSessionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSessionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
