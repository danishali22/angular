import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userForm : any = {
    fName: "",
    lName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    isActive: false,
  }

  onFormSubmit(){
    const formValue = this.userForm;
    console.log(formValue);
  }
}
