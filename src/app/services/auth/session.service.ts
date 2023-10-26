import {Injectable} from '@angular/core';
import jwt_decode from "jwt-decode";
import {CurrentUser, TokenInfo} from "./current-user.interface";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private currentUser: CurrentUser | undefined;
  private decodedToken: TokenInfo | undefined;

  constructor() {
    this.loadSession();
  }

  private loadSession(): void {
    try {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!) as CurrentUser;
      this.decodedToken = jwt_decode(this.currentUser.access_token!) as TokenInfo;

    } catch (error) {
      this.currentUser = undefined;
      this.decodedToken = undefined;
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUser && !!this.decodedToken && this.decodedToken.exp! > Date.now() / 1000;
  }

  getScopes(): string[] {
    if (!this.decodedToken) {
      return [];
    }
    return this.decodedToken.permissions as string[];
  }

  getUser(): CurrentUser {
    return this.currentUser!;
  }

  logout() {
    this.currentUser = undefined;
    this.decodedToken = undefined;
  }
}

