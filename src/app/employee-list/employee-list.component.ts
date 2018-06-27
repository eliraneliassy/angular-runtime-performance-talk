import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../core/interfaces/employee.interface';
import { fibonacci } from '../core/utils/fibonacci';
import { List } from 'immutable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {

  @Output() remove = new EventEmitter<Employee>();
  @Input() data: List<Employee>;

  constructor() { }

  calculate(num: number) {
    console.log('asd');
    return fibonacci(num);
  }

}
