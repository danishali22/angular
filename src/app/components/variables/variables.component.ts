import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
  firstName: string = "Danish";
  lastName = "Ali";
  age: number = 24;
  isActive: boolean = true;
  courseName: string;
  joining: Date = new Date();
  courseDuartion: any;

  constructor(){
    this.courseName = "Python";
    this.courseDuartion = "30 mnts";
    this.courseDuartion = false;
  }
}
