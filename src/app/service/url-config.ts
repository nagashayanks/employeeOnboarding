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
            userLogin: 'http://10.117.189.111:9090/housepital/' + 'doctors',
            userRegister: this.apiMock + 'doctorList',
            schemes:  this.apiMock + 'doctorList',

        };
    }
    /* url config with url Server list */
    urlApi() {
        return this.url = {
            userLogin: this.apiHost + 'doctors',
            userRegister: this.apiHost + 'employees',
            schemes:  this.apiMock + 'doctorList',

        };
    }
    /* return url */
    urlConfig() {
        return this.serverConfig ? this.urlApi() : this.urlMock();
    }
}
