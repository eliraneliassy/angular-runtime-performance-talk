import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { fibonacci } from '../utils/fibonacci';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(amount: number): Employee[] {
    debugger
    const arr: Employee[] = [];
    let random;
    let employee: Employee;
    for (let i = 0; i < amount; i++) {
      random = Math.floor(Math.random() * 10) + 10;
      employee = { name: 'asd', fiboCalc: fibonacci(random) };
      arr.push(employee);
    }

    return arr;

  }
}
