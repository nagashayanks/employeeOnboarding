import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { CustomValidation } from 'src/app/helper/validation';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let api: Service;
  let validationApi: CustomValidation;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };


  /* create mock data for testing */
  const MockUserService = {
    isValidUser: false,
    setValidUser: (flag: boolean) => { MockUserService.isValidUser = flag; },
    currentUser: {
      userName: 'Mani',
      userId: 1234,
      role: 'ADMIN'
    },
    validUser: () => MockUserService.isValidUser,
    loggedUser: () => {
      return MockUserService.currentUser;
    },
    modalConfig: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: ''
    }),
    alertConfigDefaultValue: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: ''
    }),
    postCall(url: string, data: any, type: string) {
      return of({
        postObject
      });
    }
  };
  const postObject = {
    customerName: 'Mani',
    email: 'test@test.com',
    gender: 'male',
    mobileNumber: 12345677890,
    dateOfBirth: new Date(),
    salary: 10000,
    address: 'test',
    passwor: '12345678'
  };

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [SharedModuleModule, PrimeModule, HttpClientTestingModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService },
        UrlConfig],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    api = TestBed.get(Service);
    validationApi = TestBed.get(CustomValidation);
    mockRouter = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check ngOnInit Valid User and form creation', () => {
    component.ngOnInit();
    component.registerForm = formBuilder.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      salary: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    });
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('Should validate registeration on while click submit()', () => {
    component.submitted = true;
    component.registerForm.controls.customerName.setValue('Mani');
    component.registerForm.controls.email.setValue('test@test.com');
    component.registerForm.controls.gender.setValue('male');
    component.registerForm.controls.mobileNumber.setValue('12345677890');
    component.registerForm.controls.dateOfBirth.setValue(new Date());
    component.registerForm.controls.address.setValue('test');
    component.registerForm.controls.password.setValue('12345678');
    component.registerForm.controls.confirmPassword.setValue('12345678');
    component.registerForm.controls.salary.setValue(20000);
    component.dobErrorFlag = false;
    component.signUp();
    expect(component.registerForm.valid).toBeTruthy();
    expect(component.spinner).toBeFalsy();
    api.alertConfig = api.modalConfig('Success', 'Registered', true, [{ name: 'Ok' }]);
  });


  describe('Should check modalAction Yes/No', () => {
    it('Should check modalAction ok', () => {
      const action = 'Ok';
      component.modalAction(action);
      expect(action).toEqual(action);
    });

    it('Should check modalAction No', () => {
      const action = 'Yes';
      component.modalAction(action);
      expect(action).toEqual(action);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });

    it('Should check modalAction No', () => {
      const action = 'No';
      component.modalAction(action);
      expect(action).toEqual(action);
    });

  });

  it('Should check reset the form', () => {
    component.submitted = false;
    component.registerForm.reset();
    expect(component.submitted).toEqual(false);
  });

  it('Should check date validation', () => {
    component.dobErrorFlag = false;
    component.validateDOB(new Date());
    validationApi.checkFutureDate(new Date(), new Date());
    expect(component.dobErrorFlag).toEqual(false);
  });

});
