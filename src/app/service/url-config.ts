import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = true;
    // 'http://10.117.189.177:9090/housepital/
    private apiHost = 'http://10.117.189.55:9090/employeemanagement/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
            userLogin: 'http://10.117.189.55:9090/employeemanagement/' + 'employees/login',
            userRegister: this.apiMock + 'doctorList',
            schemes:  this.apiMock + 'timesheets',
            time: this.apiMock + 'timesheets',
        };
    }
    /* url config with url Server list */
    urlApi() {
        return this.url = {
            userLogin: this.apiHost + 'employees/login',
            userRegister: this.apiHost + 'employees',
            schemes:  this.apiHost + 'timesheets',
            time: this.apiHost + 'timesheets',

        };
    }
    /* return url */
    urlConfig() {
        return this.serverConfig ? this.urlApi() : this.urlMock();
    }
}
