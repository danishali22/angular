import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loginUsername: string = "";
  router = inject(Router);

  constructor() {
    const loggedUser = localStorage.getItem("angularUser");
    if(loggedUser){
      this.loginUsername = loggedUser;
    }
  }

  onLogout(){
    localStorage.removeItem("angularUser");
    this.router.navigate(["/login"]);
  }
}
