import { Component, OnInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye';



  constructor( private router: Router) { }

  

  ngOnInit() {
  } 

  goToLogin(){
    this.router.navigate(['/usuarios/login'])
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

