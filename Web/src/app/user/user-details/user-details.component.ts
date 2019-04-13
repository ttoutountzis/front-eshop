import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user = new User();

  constructor() {

  }

  ngOnInit() {
  }

  validateSomething() {
    console.log('Something happens in parent');
  }

}
