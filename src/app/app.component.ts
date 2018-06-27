import { Component, OnInit } from '@angular/core';
import { Employee } from './core/interfaces/employee.interface';
import { GeneratorService } from './core/services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  salesEmployees: Employee[];
  rndEmployees: Employee[];
  constructor(private generator: GeneratorService) { }

  ngOnInit(): void {
    this.salesEmployees = this.generator.generate(1000);
    this.rndEmployees = this.generator.generate(1000);
  }

  remove(list: Employee[], item: Employee) {
    list.splice(list.indexOf(item), 1);
  }

  add(list: Employee[], name: string) {
    list.unshift({ name: name, number: this.generator.generateNumber(10, 10) });
  }

}
