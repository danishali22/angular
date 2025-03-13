import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [NgFor],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent {
  http = inject(HttpClient);
  jsonUsers: any[] = [];
  complaintUsers: any[] = [];

  getAllUsers(){
    // debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response: any) => {
      // debugger;
      this.jsonUsers = response;
    });
  }

  getComplaintUsers(){
    // debugger;
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((response: any) => {
      // debugger;
      this.complaintUsers = response.data;
    });
  }
}
