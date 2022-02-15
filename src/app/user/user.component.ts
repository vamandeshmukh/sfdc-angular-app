import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/AppUser';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  appUser: AppUser = {
    username: '',
    email: '',
    address: {},
    phone: ''
  };

  constructor(private userService: UserService) { }

  getUsers = () => {
    console.log('getUsers');
    return this.userService.getUserById(1)
      .subscribe((u) => { this.appUser = u });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
