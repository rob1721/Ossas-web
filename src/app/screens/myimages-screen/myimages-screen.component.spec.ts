import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyimagesScreenComponent } from './myimages-screen.component';

describe('MyimagesScreenComponent', () => {
  let component: MyimagesScreenComponent;
  let fixture: ComponentFixture<MyimagesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyimagesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyimagesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
