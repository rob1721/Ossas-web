import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  nombre: string = null;
  email: string = null;
  pass: string = null;
  confirmPass: string = null;

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
          Validators.maxLength(30)
          // tslint:disable-next-line: max-line-length
          /* Validators.pattern(/^([0-9]{1,2}[0-9]{6}[0-9kK]{1}\s{0,})$|^[0-9]{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}\s{0,}$|^([0-9]{1,2}[0-9]{6}-[0-9kK]{1}\s{0,})$/) */
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      pass: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      confirmPass: new FormControl(
        '',
        Validators.compose([
          Validators.required
        ])
      ),
    });
  }


    validarDatos(): void{
      console.log('walala');
    }
}
