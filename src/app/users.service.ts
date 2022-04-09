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

  isLogged: boolean = false;

  email: string = '';
  password: string = '';

  constructor() { }

  getUsers() {
    return this.users;
  }

  getLoggedUser() {
    return this.email;
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

  getIsLogged() {
    return this.isLogged;
  }

/*  setLoggedUser(loggedUser: object) {
    this.loggedUser = loggedUser;
  }*/
}
