import { Component, OnInit } from '@angular/core';
import { Employee } from './core/interfaces/employee.interface';
import { GeneratorService } from './core/services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employees: Employee[];
  constructor(private generator: GeneratorService) { }

  ngOnInit(): void {
    this.employees = this.generator.generate(10000);
  }

  remove(item: Employee) {
    this.employees.splice(this.employees.indexOf(item), 1);
  }

  add(name: string) {
    this.employees.unshift({ name: name, number: this.generator.generateNumber(10, 10) });
  }

}
