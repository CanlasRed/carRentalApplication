import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  showPassword = false;
  showPassword2 = false;
  passwordToggleIcon = 'eye';
  passwordToggleIcon2 = 'eye';

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

  togglePassword2():void {
    this.showPassword2 = !this.showPassword2;

    if(this.passwordToggleIcon2 == 'eye') {
      this.passwordToggleIcon2 = 'eye-off';
    }else {
      this.passwordToggleIcon2 = 'eye';
    }
  }

  login(){
    this.router.navigate(['/login'])
  }

  back(){
    this.router.navigate(['/tabs/tab1'])
  }

}
