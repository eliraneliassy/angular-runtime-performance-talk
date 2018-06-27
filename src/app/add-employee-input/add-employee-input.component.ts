import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee-input',
  templateUrl: './add-employee-input.component.html',
  styleUrls: ['./add-employee-input.component.scss']
})
export class AddEmployeeInputComponent {

  label: string;
  @Output() add = new EventEmitter<string>();

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

}
