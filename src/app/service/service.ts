import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ConstantService } from './constant';
import { CommonService } from './common-service';
@Injectable()

export class Service {
  alertConfig = {
    header: '',
    message: '',
    modalShow: false,
    button: ''
  };

  constructor(
    private http: HttpClient,
    private userConstant: ConstantService,
    private common: CommonService) { }

  /* Http Headers */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /* post api call  */
  postCall(url, postData, type): Observable<any> {
    this.common.alertConfigDefaultValue();
    return this.http[type](url, postData, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  /* get call */
  getList(url: string): Observable<any> {
    this.common.alertConfigDefaultValue();
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.errorHandler.bind(this))
    );
  }

  /* Error handling */
  private errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      /* Get client-side error */
      errorMessage = error.error.message;
    } else {
      /* Get server-side error */
      const code = 0;
      errorMessage = this.userConstant.messageConstant()[code];
    }
    this.common.alertConfig = this.common.modalConfig('Error', errorMessage, true, [{ name: 'Ok' }]);
    return throwError(errorMessage);
  }
  /* Get logged user */
  public loggedUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }
  /* Check whether valid user or not  */
  public validUser() {
    if (this.loggedUser()) {
      return true;
    } else {
      return false;
    }
  }


  /* Set modal properities  */
  public alertConfigDefaultValue() {
    this.alertConfig = {
      header: null,
      message: null,
      modalShow: false,
      button: null
    };
  }
  /* Set modal properities  */
  public modalConfig(head, mesg, modal, btn) {
    return {
      header: head,
      message: mesg,
      modalShow: modal,
      button: btn
    };
  }
}
