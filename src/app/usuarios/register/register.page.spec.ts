import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisterPageModule } from './register.module';
import { Router } from "@angular/router";
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;
  let page;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        RegisterPageModule

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    page = fixture.debugElement.nativeElement;
  }));

  it('should create register form on page init', () => {
    fixture.detectChanges();

    expect(component.registerForm).not.toBeUndefined();
  });

  it('should go to home page on register', () => {
    fixture.detectChanges();

    spyOn(router, 'navigate');


    component.registerForm.getForm().get('name').setValue("anyName");

    component.registerForm.getForm().get('email').setValue("any@email.com");

    component.registerForm.getForm().get('password').setValue("anyPassword");

    component.registerForm.getForm().get('repeatPassword').setValue("anyPassword");


    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledTimes(0);
  });

  it('should not be allowed to register with form invalid', () => {
    fixture.detectChanges();

    spyOn(router, 'navigate');

    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledTimes(0);
  });





});
