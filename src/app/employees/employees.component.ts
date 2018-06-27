import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../core/interfaces/employee.interface';
import { fibonacci } from '../core/utils/fibonacci';
import { List } from 'immutable';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {

  @Input() data: List<Employee>;

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Employee>();

  @Input() department: string;



}
