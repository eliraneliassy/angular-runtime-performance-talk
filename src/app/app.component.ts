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
  constructor(private generator: GeneratorService) {}

  ngOnInit(): void {
    debugger
    this.employees = this.generator.generate(1);
  }

}
