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
  failedLoginMessage: string = '';
  failedRegisterMessage: string = '';
  emailCheck: string = '';
  passNumberCheck: string = '';
  passUpperCaseCheck: string = '';
  passLowerCaseCheck: string = '';
  passLengthCheck: string = '';
  loginActive: boolean = true;

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
      this.failedLoginMessage = 'email lub haslo nieprawidłowe';
    } else {
      this.usersService.setIsLogged(true);
      this.router.navigate(['konto'])
    }
  }

  setLogin(value: boolean) {
    this.loginActive = value;
  }

  onSubmitRegister(): void {
    let registered = this.users.find( user => user.email === this.email);
    let emailCheck = this.emailValidation();
    let passwordCheck = this.passwordValidation();    

    if(registered) {
      this.failedRegisterMessage = 'taki użytkownik już istnieje';
    } else if(emailCheck && passwordCheck){
      this.usersService.addUser(this.email, this.password)
    } else {
      this.failedRegisterMessage = '';
    }
  }

  emailValidation(): boolean {
    let regex = /\S+@\S+.\S/
    return regex.test(this.email);
  }

  passwordValidation(): boolean {
    let number = /[0-9]/.test(this.password);
    let upperCase = /[A-Z]/.test(this.password);
    let lowerCase = /[a-z]/.test(this.password);
    let length = this.password.length > 8;

    this.passNumberCheck = number ? '' : 'hasło musi zawierać przynajmnniej jedną cyfrę';
    this.passUpperCaseCheck = upperCase ? '' : 'hasło musi zawierać przynajmnniej jedną dużą literę';
    this.passLowerCaseCheck = lowerCase ? '' : 'hasło musi zawierać przynajmnniej jedną małą literę';
    this.passLengthCheck = length ? '' : 'hasło musi zawierać przynajmnniej 8 znaków';

    return number && upperCase && lowerCase && length;
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
