import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import jwt_decode from "jwt-decode";
import { SessionService } from '../services/auth/session.service';
import { MenuComponent } from '../components/menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private sessionService: SessionService) { }

  routes = [{
    url: '/',
    scope: ['read:users', 'register:project', 'register:company', 'search:candidate', 'register:technical-test']
  },
  {
    url: '/registar-resultado-prueba-tecnica',
    scope: ['register:technical-test']
  }
  ]

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.sessionService.isAuthenticated()) {
      const permissions = this.sessionService.getScopes();
      const routeFound = this.routes.find((item) => {
        const scopes = item.scope.find(scope => permissions.includes(scope));
        return item.url === state.url && scopes
      });
      if (routeFound) {
        return true;
      } else {
        this.router.navigate(['/notfound']);
        return false;
      }
    }
    // usuario no logueado
    this.router.navigate(['/iniciar-sesion']);
    return false;
  }
}

