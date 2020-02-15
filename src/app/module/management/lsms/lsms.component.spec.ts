import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsmsComponent } from './lsms.component';

describe('LsmsComponent', () => {
  let component: LsmsComponent;
  let fixture: ComponentFixture<LsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
