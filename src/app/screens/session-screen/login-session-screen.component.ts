import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { USERS } from '../../core/services/user/users.const';

@Component({
  selector: 'app-login-session-screen',
  templateUrl: './login-session-screen.component.html',
  styleUrls: ['./login-session-screen.component.css']
})
export class LoginSessionScreenComponent implements OnInit {

  listaUsers = USERS;
  formulario: FormGroup;
  email: string;
  password: string;
  constructor(private router: Router,  private formBuilder: FormBuilder) { }

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

    this.formulario = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
      });
  }

  public changeBg(list) {
    this.bg = list.bg;
    list.active = true;

    for (const bList of this.bgList) {
		  if (bList !== list) {
				bList.active = false;
			}
		}
  }

  public formSubmit() {
    /*this.router.navigate(['/home']);*/
    let aux = true;
    for (const i of this.listaUsers){
      if ((i.email === this.email) && (i.pass === this.password)){
        localStorage.setItem('currentUser', i.name);
        this.router.navigate(['/home']);
        return alert( 'Bienvenido ' + i.name );
      }
      else {
        aux = false;
      }
    }
    if (aux === false) {
      alert('Datos incorrectos');
    }
  }

}
