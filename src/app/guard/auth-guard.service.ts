import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) { }

  routes = [{
    url: '/',
    scope: ['read:users', 'register:project', 'register:company', 'search:candidate', 'register:technical-test']
  },
  {
    url: '/registar-resultado-prueba-tecnica',
    scope: ['register:technical-test']
  },
  {
    url: '/listar-citas',
    scope: ['view:appointment']
  }
  ]

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      const local = localStorage.getItem('currentUser');
      let currentUser: any;
      if (local !== null) {
        currentUser = JSON.parse(local);
      }
      const decodeToken: any = jwt_decode(currentUser.access_token);
      const permissions = decodeToken["permissions"] as string[];
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

