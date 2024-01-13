// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authenticateUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  private userKey = 'user';

  getUser(): any {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem(this.userKey);
      return userString ? JSON.parse(userString) : null;
    } else {
      return null;
    }
  }

  getFirstName(): string | null {
    const user = this.getUser();
    return user ? user.firstName : null;
  }

  saveUser(user: any): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.userKey);
    }
  }
}
