import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nf',
  templateUrl: './nf.page.html',
  styleUrls: ['./nf.page.scss'],
})
export class NFPage implements OnInit {

  constructor(private alertController: AlertController) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
