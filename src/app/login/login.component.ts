import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  users: any[] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  getEmail(): void {
    this.email = this.usersService.getEmail();
  }

  getPassword(): void {
    this.password = this.usersService.getPassword();
  }

  getUsers(): void {
    this.users = this.usersService.getUsers();
  }

  onSubmit(): void {
    let logged = this.users.find( user => user.email === this.email && user.password === this.password);

    if(!logged) {
      console.log('email lub haslo nieprawidłowe');
    } else {
      this.usersService.setIsLogged(true);
      this.router.navigate(['konto'])
    }
  }

  ngOnInit(): void {
    this.getEmail();
    this.getPassword();
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.usersService.setEmail(this.email);
    this.usersService.setPassword(this.password);
  }

}
