import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
  ];

  login(username: string, password: string): boolean {
    return this.users.some(
      (u) => u.username === username && u.password === password
    );
  }
}
