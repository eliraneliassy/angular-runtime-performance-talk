import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../core/interfaces/employee.interface';
import { fibonacci } from '../core/utils/fibonacci';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  @Input() data: Employee[];

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();

  label: string;

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }

}
