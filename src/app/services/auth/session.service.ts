import {Injectable} from '@angular/core';
import jwt_decode from "jwt-decode";
import {CurrentUser, TokenInfo} from "./current-user.interface";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private currentUser!: CurrentUser | null;
    private decodedToken!: TokenInfo | null;

    constructor() {
        this.loadSession();
    }

    loadSession(): void {
        try {
            const user = localStorage.getItem('currentUser');
            if (user) {
                this.currentUser = JSON.parse(user) as CurrentUser;
                if (this.currentUser.access_token) {
                    this.decodedToken = jwt_decode(this.currentUser.access_token) as TokenInfo;                    
                }
            }

        } catch (error) {
            this.currentUser = null;
            this.decodedToken = null;
        }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser && !!this.decodedToken && !!this.decodedToken.exp && this.decodedToken.exp > Date.now() / 1000;
    }

    getScopes(): string[] {
        if (!this.decodedToken) {
            return [];
        }
        return this.decodedToken.permissions as string[];
    }

    getUser(): CurrentUser | null {
        return this.currentUser;
    }
}