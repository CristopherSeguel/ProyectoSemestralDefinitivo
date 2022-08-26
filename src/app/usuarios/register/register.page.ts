import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterPageForm } from "./form/register.page.form";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: RegisterPageForm;
  constructor(private formBuilder: FormBuilder,
              private router: Router) {}

  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {
    this.createForm();
  }

  register(){
    this.registerForm.getForm().markAllAsTouched();

    if (this.registerForm.getForm().valid) {
      //Verificar login
      this.router.navigate(['home'])
      
      
    }
  }

  private createForm(){
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }
  

  togglePassword():void {
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon == 'eye' ){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
   
//Mostrar e ocultar contra
}
