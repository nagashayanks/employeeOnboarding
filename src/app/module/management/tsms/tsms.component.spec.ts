import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsmsComponent } from './tsms.component';
import { of } from 'rxjs';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { Service } from 'src/app/service/service';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';

describe('TsmsComponent', () => {
  let component: TsmsComponent;
  let fixture: ComponentFixture<TsmsComponent>;
  let api: Service;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  /* create mock data for testing */
  const MockUserService = {
    isValidUser: false,
    setValidUser: (flag: boolean) => { MockUserService.isValidUser = flag; },
    currentUser: {
      userName: 'Mani',
      userId: 1234
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
    getList(url: string) {
      return of(
        [
          {
            schemeId: 1,
            schemeName: 'string',
            userName: 'string',
            paymentMode: 'string',
            date: '12',
            email: 'string'
          }
        ]
      );
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrimeModule, SharedModuleModule],
       declarations: [ TsmsComponent ],
       providers: [Service, { provide: Router, useValue: mockRouter },
        UrlConfig]
    })
    .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
