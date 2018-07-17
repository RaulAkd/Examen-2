import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router: Router) {

  }

  title = 'login';
  email;
  password;
  emailUser;
  passwordUser;

  IrUsuario(formulario) {
    console.log('Entro');
    console.log(formulario);
    const controles = formulario.controls;
    const password = controles.password.value;
    const email = controles.email.value;
    console.log(email);
    // const passwordConfirmation = controles.passwordConfirmation.value;
    const passwordUser = '123456';
    const emailUser = 'molinaraul52@yahoo.es';
    if (password === passwordUser && email === emailUser) {
      alert('Muy bien!');
      const url = [
        '/home', // segmentos
        'usuario',
         // los parametros llegan como texto plano
      ];
      this._router.navigate(url);
    } else {
      this.password = undefined;
      this.passwordUser = undefined;
      alert('Correo o clave incorrecta.');
    }
  }

  prueba() {
    const url = [
      '/home', // segmentos
      'usuario'
       // los parametros llegan como texto plano
    ];
    this._router.navigate(url);
  }
}
