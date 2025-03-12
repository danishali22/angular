import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1: number = 0;
  num2: number = 0;
  selectedCast: string = "";

  cityList: string[] = ["Lahore", "Karachi", "Peshawar", "Quetta", "Multan"];

  studentList: {
    name: string;
    city: string;
    grade: string;
    isActive: boolean;
  }[] = [
      { name: "Danish", city: "Lahore", grade: 'A', isActive: true},
      { name: "Amir", city: "Karachi", grade: '', isActive: true},
      { name: "Javaid", city: "Peshawar", grade: 'B', isActive: false},
      { name: "Haider", city: "Quetta", grade: 'C', isActive: true},
      { name: "Aqib", city: "Multan", grade: 'B', isActive: false},
  ]

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }

  hideShowDiv2(isDisplay: boolean){
    this.isDiv2Visible = isDisplay;
  }
}
