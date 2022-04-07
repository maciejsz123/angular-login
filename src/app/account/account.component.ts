import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  loggedUser = {id: 0, email: '', password: ''};

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loggedUser = this.usersService.getLoggedUser();
  }

}
