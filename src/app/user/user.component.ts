import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userName = 'John Doe';
  userEmail = 'John@gmail.com';
  userPhone = '123-456-7890';
  userAddress = '123 Main St, City, Country';

  
}
