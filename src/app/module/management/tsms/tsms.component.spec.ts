import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsmsComponent } from './tsms.component';

describe('TsmsComponent', () => {
  let component: TsmsComponent;
  let fixture: ComponentFixture<TsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsmsComponent ]
    })
    .compileComponents();
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
