import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Python Crash course"
  courseDuration: string = "3 hours"
  myPlaceholder = "Enter course name"
  myClass = "bg-success text-light"
  isActive = true;

  showAlert() {
    alert("Welcome to the course of angular 19")
  }

  showMsg(msg: string) {
    alert(msg);
  }

  onStateChange(){
    alert("State got changed")
  }
}
