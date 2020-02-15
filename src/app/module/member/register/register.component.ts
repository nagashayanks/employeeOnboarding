import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { MustMatch } from 'src/app/helper/must-watch';
import { CustomValidation } from 'src/app/helper/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  spinner = false;
  dobErrorFlag =  false;
  dojErrorFlag =  false;
  errorMessage: string;
  errorMessage1: string;
  constructor(
    private fb: FormBuilder,
    public api: Service,
    private url: UrlConfig,
    private router: Router,
    private validate: CustomValidation
  ) { }

  /* registeration form controls creation */
  private createForm() {
    this.registerForm = this.fb.group({
      employeeName: ['', Validators.required],
      experience: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      gender: ['male'],
    });
  }

  /*  Access to form fields */
  get register() {
    return this.registerForm.controls;
  }

  /* To validate valid date
  @date input from user selected
  */
  public validateDOB(date: Date) {
    this.dobErrorFlag = false;
    this.errorMessage = '';
    if (this.validate.checkFutureDate(date, new Date())) {
      this.dobErrorFlag = true;
      this.errorMessage = 'DOB should not be in the future date';
    } else if (this.validate.calculateAge(date) < 18) {
      this.errorMessage = 'Age should be 18 or above';
      this.dobErrorFlag = true;
    }
  }
  /* To validate valid date
  @date input from user selected
  */
 public validateDOJ(date: Date) {
  this.dojErrorFlag = false;
  this.errorMessage1 = '';
  if (this.validate.checkFutureDate(date, new Date())) {
    this.dojErrorFlag = true;
    this.errorMessage1 = 'DOJ should not be in the future date';
  }
}
  /* User registeration
  @param registerForm values
  */
  public signUp() {
    this.submitted = true;
    if (this.registerForm.valid) {
      // this.registerForm.value.mobileNumber = Number(this.registerForm.value.mobileNumber);
      // this.registerForm.value.salary = Number(this.registerForm.value.salary);
      this.registerForm.value.dateOfBirth = this.validate.convertDate(this.registerForm.value.dateOfBirth);
      this.registerForm.value.dateOfJoining = this.validate.convertDate(this.registerForm.value.dateOfJoining);
      this.registerForm.value.experience = Number(this.registerForm.value.experience);
      this.spinner = true;
      /* Api call*/
      this.api.postCall(this.url.urlConfig().userRegister, this.registerForm.value, 'post')
        .subscribe(user => {
          this.spinner = false;
          if (user.statusCode === 200) {
            this.api.alertConfig = this.api.modalConfig('Success', 'Registration Successfully', true, [{ name: 'Ok' }]);
          }
        },
        error => {
          this.spinner = false;
        });
    }
  }

  /* Modal Action
   @param Ok modal has been closed
   @param yes modal has been closed and navigate to login page
   @param no modal has been closed
  */
  public modalAction(action: string): void {
    if (action === 'Ok') {
      this.router.navigate(['/login']);

      this.api.alertConfigDefaultValue();
    } else if (action === 'Ok') {
      this.api.alertConfigDefaultValue();
    } else {
      this.api.alertConfigDefaultValue();
      this.reset();
    }
  }
  /* form reset while clicking on reset */
  public reset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  ngOnInit() {
    /* Check whether login/not */
    if (!this.api.validUser()) {
      this.router.navigate(['/register']);
    } else {
    //  this.router.navigate(['/account-summary']);
    }
    /* Call the form creation while on component initiation */
    this.createForm();
    /*preparing document Type */
  }

}
