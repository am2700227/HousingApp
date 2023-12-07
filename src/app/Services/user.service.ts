import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    const storedUsers = localStorage.getItem('Users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  getUsers(): any[] {
    return this.users;
  }

  addUser(user: any) {
    this.users.unshift(user);
    localStorage.setItem('Users', JSON.stringify(this.users));
  }
}
