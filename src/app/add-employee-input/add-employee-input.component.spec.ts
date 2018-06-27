import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeInputComponent } from './add-employee-input.component';

describe('AddEmployeeInputComponent', () => {
  let component: AddEmployeeInputComponent;
  let fixture: ComponentFixture<AddEmployeeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
