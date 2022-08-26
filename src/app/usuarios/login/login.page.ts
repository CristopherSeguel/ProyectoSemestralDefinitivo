
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, IonModal  } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { Router, NavigationExtras } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    this.pasarDatos();
    
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
      this.email = "";
    }
  }

  email: string = "";
  



  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    ) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }


  contraNueva(){
    this.router.navigate(['usuarios/register'])
  }

  menu(){
    this.router.navigate(['menu/menu-principal'])
  }


  


  


  async ingresar() {
    var f = this.formularioLogin.value;

    var usuario = "juan";
    var contra = "1234";


    if (usuario == f.nombre && contra == f.password) {
      console.log('Ingresado');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        cssClass: 'myalert',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }


 



  pasarDatos(){
    let navigationExtras: NavigationExtras ={
      state:{
        ema: this.email,
        
      }
    }
    this.router.navigate(['usuarios/recover-password'], navigationExtras);
  }



}
