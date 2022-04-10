import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  loggedUser: string = '';
  isLogged: boolean = false;

  constructor(private usersService: UsersService, private router: Router) { }

  logOut() {
    this.usersService.setIsLogged(false);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
    this.isLogged = this.usersService.getIsLogged();
  }

}
