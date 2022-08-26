import { Component, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from "lottie-web";

import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  private animation :AnimationItem;
  options:AnimationOptions = {
    path:'assets/112545-wumpus-hi.json'
  }



  constructor(private ngZone:NgZone, private router: Router) {}

  created(animation:AnimationItem){
    console.log(animation);
  }


  ingresar(){
    this.router.navigate(['usuarios/login'])
  }

  registro(){
    this.router.navigate(['usuarios/register'])

  }


}
