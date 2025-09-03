import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user:User = new User("Tony Stark", "tony@gmail.com", +91123-456-7890);

  
}
