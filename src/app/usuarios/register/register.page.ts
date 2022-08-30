import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonModal  } from '@ionic/angular';
import { RegisterPageForm } from "./form/register.page.form";
import { Router } from "@angular/router";
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //REGISTRO PROFESOR MODAL

@ViewChild(IonModal) modal: IonModal;
  
message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string;

cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.name, 'confirm');
  
  
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    
    
  }
}


  facePlottingOption: boolean = false;
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
      this.router.navigate(['/home'])
      
      
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
   
//verificacion checkbox

public checkboxFacePlotting(e) {
  if (e.currentTarget.checked) {
    console.log("=========FACE PLOTTING ENABLED");
    this.facePlottingOption = true;
    
  } else {
    console.log("=========FACE PLOTTING DISABLED");
    this.facePlottingOption = false;
  }
}












}
