import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false; // Track the login status

  private users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
  ];

  login(username: string, password: string): boolean {
    const isValid = this.users.some(
      (u) => u.username === username && u.password === password
    );

    this.isLoggedIn = isValid; // Store the state
    return isValid;
  }

  // Method for the guard to check status
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
