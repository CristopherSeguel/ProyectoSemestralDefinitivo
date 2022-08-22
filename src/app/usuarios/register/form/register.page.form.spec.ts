import { Component } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form";




describe('RegisterPageForm', () => {
    let registerPageForm: RegisterPageForm;
    let form: FormGroup;

    beforeEach(() => {
        registerPageForm = new RegisterPageForm(new FormBuilder());
        form = registerPageForm.getForm();
    })

    it('should empty name be invalid',() =>{
        expect(form.get('name').valid).toBeFalsy();
    })

    it('should empty email be invalid',() =>{
        expect(form.get('email').valid).toBeFalsy();
    })

    it('should empty password be invalid',() =>{
        expect(form.get('password').valid).toBeFalsy();
    })






    it('shouldd create register on register',() =>{
        expect(form.get('name').valid).toBeFalsy();
    })


    //PRUEBAS

    it('should invalid email be invalid', () =>{
        form.get('email').setValue('invalidEmail');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('should password less than 8 characters be invalid', () =>{
        form.get('password').setValue('1234567');

        expect(form.get('password').valid).toBeFalsy();
    })


    it('should password password different from repeat password be invalid', () =>{
        form.get('password').setValue('anyPassword');
        form.get('repeatPassword').setValue('anotherPassword');

        expect(form.get('repeatPassword').valid).toBeFalsy();
    })


    it('should form be valid', () =>{
        form.get('name').setValue("anyName");
        form.get('email').setValue("any@email.com");
        form.get('password').setValue("anyPassword");
        form.get('repeatPassword').setValue("anyPassword");

        expect(form.valid).toBeTruthy();
    })






});