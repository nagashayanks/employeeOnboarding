import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { MemberComponent } from './member.component';
import { of } from 'rxjs';
import { NotificationService } from 'src/app/service/notification-service';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let api: Service;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  /* create mock data for testing */
  const MockUserService = {
    isValidUser: false,
    setValidUser: (flag: boolean) => { MockUserService.isValidUser = flag; },
    currentUser: {
      customerName: 'Mani',
      customerId: 1234,
      type: 'credit'
    },
    validUser: () => MockUserService.isValidUser,
    modalConfig: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: []
    }),
    loggedUser: () => MockUserService.isValidUser,
    alertConfigDefaultValue: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: []
    }),
    getList() {
      return of([{
        customerName: 'Mani',
        customerId: 1234,
        type: 'credit'
      }]);
    }

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService }, UrlConfig,
        NotificationService]
    })
    .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
