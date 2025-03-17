import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: UserLogin = new UserLogin();
  router = inject(Router);

  onLogin(){
    if (this.loginObj.username == "admin" && this.loginObj.password == "admin"){
      this.router.navigateByUrl("/directive");
    } else {
      alert("Wrong Credentials");
    }
  }
}

export class UserLogin {
  username: string;
  password: string;
  constructor(){
    this.username = "";
    this.password = "";
  }
}
