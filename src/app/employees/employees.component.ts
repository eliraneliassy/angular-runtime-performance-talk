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

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();
  label: string;
  @Input() department: string;



  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    console.log('calc' , this.department, Date.now());
    return fibonacci(num);
  }


}
