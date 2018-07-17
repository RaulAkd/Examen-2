import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const ARREGLO_RUTAS: Routes = [
    {
        component: LoginComponent,
        path: 'login',
    },
    {
        component: HomeComponent,
        path: 'home',
        children: [
            {
                path: 'usuario',
                component: UsuarioComponent
            },
            {
                path: '',
                redirectTo: 'usuario',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
