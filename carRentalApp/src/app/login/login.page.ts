import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  showPassword = false;
  passwordToggleIcon = 'eye';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  togglePassword():void {
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }else {
      this.passwordToggleIcon = 'eye';
    }
  }

  register(){
    this.router.navigate(['/register'])
  }

  back(){
    this.router.navigate(['/tabs/tab1'])
  }

  signin(){
    this.router.navigate(['/tabs/tab1'])
  }

}
