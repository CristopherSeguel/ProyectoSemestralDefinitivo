
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }


  //Alerta para ingresar correo
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Has olvidado tu contraseña',
      subHeader: 'ingresa tu dirección de correo electrónico y te ayudaremos a restablecer tu contraseña',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            this.router.navigate(['usuarios/recover-password']);
          }
        }
      ],
      
      inputs: [
        {
          placeholder: 'Email',
        },
        
      ],
    });

    await alert.present();
  }



}
