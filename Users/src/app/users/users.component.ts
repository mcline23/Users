import { Component, OnInit } from '@angular/core';
 
import { User } from './user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users : User[]
	

  constructor() { }

  ngOnInit() {
  	this.users = [
  		{first_name: "Michelle", last_name: "Cline", created_at: Date.now()},
  		{first_name: "Nicole", last_name: "Zurita", created_at: Date.now()},
  		{first_name: "Mikayla", last_name: "Jordan", created_at: Date.now()}

  	]
  	 


  }

}
