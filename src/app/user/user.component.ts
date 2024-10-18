// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   // imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   // selectedUser = DUMMY_USERS[randomIndex];
//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   // get imagePath() {
//   //   return 'users/' + this.selectedUser.avatar;
//   // }

//   imagePath = computed(() => 'users/' + this.selectedUser().avatar)

//   get imageName() {
//     return this.selectedUser.name;
//   }

//   onUserClick() {
//     // console.log("clicked!");
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input({ required: true}) id !: string;
  // @Input({ required: true }) avatar !: string;
  // @Input({ required: true }) name !: string;
  // @Input({ required:true }) user !: {
  //   id : string;
  //   avatar : string;
  //   name : string;
  // }
  @Input({ required:true }) user !: User;
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  @Input({ required:true }) selected !: boolean;

  get imagePath() {
    // return 'users/' + this.avatar;
    return 'users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });s

  onUserClick() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
