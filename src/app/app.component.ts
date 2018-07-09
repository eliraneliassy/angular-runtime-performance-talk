import { List } from 'immutable';
import { Component, OnInit } from '@angular/core';
import { Employee } from './core/interfaces/employee.interface';
import { GeneratorService } from './core/services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  salesEmployees: List<Employee>;
  rndEmployees: List<Employee>;
  constructor(private generator: GeneratorService) { }

  ngOnInit(): void {
    this.salesEmployees = List(this.generator.generate(1000));
    this.rndEmployees = List(this.generator.generate(1000));
  }

  remove(list: List<Employee>, item: Employee) {
    return list.splice(list.indexOf(item), 1);
  }

  add(list: List<Employee>, name: string) {
    return list.unshift({ name: name, number: this.generator.generateNumber(10, 10) });
  }

}
