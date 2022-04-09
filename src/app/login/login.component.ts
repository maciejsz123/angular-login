import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private usersService: UsersService) { }

  getEmail(): void {
    this.email = this.usersService.getEmail();
  }

  getPassword(): void {
    this.password = this.usersService.getPassword();
  }

  ngOnInit(): void {
    this.getEmail();
    this.getPassword();
  }

  ngOnDestroy(): void {
    this.usersService.setEmail(this.email);
    this.usersService.setPassword(this.password);
  }

}
