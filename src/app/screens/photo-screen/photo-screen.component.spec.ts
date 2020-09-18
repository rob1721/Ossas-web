import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoScreenComponent } from './photo-screen.component';

describe('PhotoScreenComponent', () => {
  let component: PhotoScreenComponent;
  let fixture: ComponentFixture<PhotoScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
