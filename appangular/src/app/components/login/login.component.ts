import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  model: any = {
    usuario: '',
    password: ''
  };
  error: string = '';

  constructor(private router: Router, private _authService: AuthService) {
  }

  login() {
    this._authService.postLogin(this.model).subscribe(
      (response) => {
        localStorage.setItem(environment.localStorageJwt, JSON.stringify(response));
        console.log(response);
        this.router.navigate(['producto/list']);
      },
      (error) => {
        if (error.status == 400 || error.status == 404)
          this.error = 'Alguno de los datos proporcionados es incorrecto.';
        else
          this.error = 'Sucedió un error inesperado, reportelo al administrador.';
        console.log('Error', error);
      }
    );
  }
}
