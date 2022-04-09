import { Component, HostListener } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-login';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    let data = localStorage.getItem('data');
    let obj;
    if(data) {
      obj = JSON.parse(data);
    }

    this.usersService.setUsers(obj.users);
    this.usersService.setIsLogged(obj.isLogged);
    this.usersService.setEmail(obj.email);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event: any) {
    localStorage.setItem('data', JSON.stringify(this.usersService.setLocalStorage()));
  }
}
