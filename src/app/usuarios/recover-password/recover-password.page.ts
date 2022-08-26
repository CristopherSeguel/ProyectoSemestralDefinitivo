import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  e: string = "";

  constructor(public toastController: ToastController,private router: Router, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.e = this.router.getCurrentNavigation().extras.state.ema;
        
      }
    })
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Codigo incorrecto.',
      duration: 3000
    });
    toast.present();
  }


  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 

  }

  olvidasteContra(){
    this.router.navigate(['usuarios/forgot-password'])
  }
}
