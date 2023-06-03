import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let ret: boolean = false;
    const expectedRole = route.data['expectedRole'];
    let ls = localStorage.getItem(environment.localStorageJwt);
    if (ls) {
      let user = JSON.parse(ls);
      if (user == null) {
        ret = false;
      }
      if (expectedRole.indexOf(user.rol) == -1) {
        user = null;
        ret = false;
      } else {
        ret = true;
      }
    }
    if (ret) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
