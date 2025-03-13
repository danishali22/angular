import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [NgFor, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  http = inject(HttpClient);

  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date(),
  }

  constructor(){
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((response: any) => {
      this.userList = response.data;
    });
  }

  onSaveUser(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewUser", this.userObj).subscribe((response: any) => {
      this.userList = response.data;
      this.getUsers();
    });
    this.resetForm();
  }

  onEditUser(data: any) {
    this.userObj = data;
  }

  onUpdateUser() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateUser", this.userObj).subscribe((response: any) => {
      this.userList = response.data;
      this.getUsers();
    });
    this.resetForm();
  }

  onDeleteUser(id: number){
    const isConfirm = confirm("Are you sue want to delete")
    if(isConfirm){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId=" + id).subscribe((response: any) => {
        this.getUsers();
      });
    }
  }

  resetForm(){
    this.userObj = "";
  }
}
