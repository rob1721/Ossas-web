import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  constructor(private router: Router) { }

  bg;
  bgList;

  ngOnInit() {
    this.bg = '../../../assets/images/g.jpg';
    this.bgList = [
      { 'bg': '../../../assets/images/g.jpg', active: true },
      { 'bg': '../../../assets/images/a.jpg' },
      { 'bg': '../../../assets/images/d.jpg' },
      { 'bg': '../../../assets/images/f.jpg' },
      { 'bg': '../../../assets/images/h.jpg' },
      { 'bg': '../../../assets/images/j.jpg' }
    ];
  }

  public changeBg(list) {
    this.bg = list.bg;
    list.active = true;

    for (let bList of this.bgList) {
      if (bList != list) {
        bList.active = false;
      }
    }
  }

  public formSubmit(f: NgForm) {
    this.router.navigate(['/home']);
  }

}
