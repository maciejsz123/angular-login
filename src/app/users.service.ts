import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    {'id': 0, email: 'jan.kowalski@gmail.com', password: 'Test12345'},
    {'id': 1, email: 'ewa.kowalska@gmail.com', password: 'Test12345'},
    {'id': 2, email: 'nowak.marcin@o2.pl', password: 'Test56789'},
    {'id': 3, email: 'nowak.edyta@o2.pl', password: 'Test56789'}
  ]

  isLogged: boolean = false;

  email: string = '';
  password: string = '';

  constructor() { }

  getUsers() {
    return this.users;
  }

  setUsers(users: []) {
    this.users = users
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

  setIsLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  }

  setLocalStorage() {
    return {
      isLogged: this.isLogged,
      email: this.email,
      users: this.users
    }
  }

/*  setLoggedUser(loggedUser: object) {
    this.loggedUser = loggedUser;
  }*/
}
