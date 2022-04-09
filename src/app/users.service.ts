import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    {'id': 0, email: 'jan.kowalski@gmail.com', password: 'test1234'},
    {'id': 1, email: 'ewa.kowalska@gmail.com', password: 'test1234'},
    {'id': 2, email: 'nowak.marcin@o2.pl', password: 'test5678'},
    {'id': 3, email: 'nowak.edyta@o2.pl', password: 'test5678'}
  ]
  private loggedUser = { 'id': 0, email: 'jan.kowalski@gmail.com', password: 'test1234' };
  email: string = '';
  password: string = '';

  constructor() { }

  getUsers() {
    return this.users;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(pass: string) {
    this.password = pass;
  }

/*  setLoggedUser(loggedUser: object) {
    this.loggedUser = loggedUser;
  }*/
}
