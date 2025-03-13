import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css'
})
export class UserReactiveComponent {
  http = inject(HttpClient);

  isFormVisible: boolean = true;
  userList: any[] = [];

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    emailId: new FormControl(""),
    fullName: new FormControl(""),
    role: new FormControl(""),
    createdDate: new FormControl(new Date()),
    password: new FormControl(""),
    projectName: new FormControl(""),
    refreshToken: new FormControl(""),
    refreshTokenExpiryTime: new FormControl(new Date()),
  });

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((response: any) => {
      this.userList = response.data;
    });
  }
  onSave() {
    const formValue = this.userForm.value;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewUser", formValue).subscribe((response: any) => {
      this.userList = response.data;
      this.getUsers();
    });
    this.userForm.reset();
  }

  toggleFormVisibility(){
    this.isFormVisible = !this.isFormVisible;
  }
}
