import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import {ARREGLO_RUTAS} from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { FotoUsuarioComponent } from './componentes/foto-usuario/foto-usuario.component';
import { NombreUsuarioComponent } from './componentes/nombre-usuario/nombre-usuario.component';
import { BotonVisitarComponent } from './componentes/boton-visitar/boton-visitar.component';
import { BotonAnteriorComponent } from './componentes/boton-anterior/boton-anterior.component';
import { BotonSiguienteComponent } from './componentes/boton-siguiente/boton-siguiente.component';
import { BotonTransferenciaComponent } from './componentes/boton-transferencia/boton-transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    HomeComponent,
    FotoUsuarioComponent,
    NombreUsuarioComponent,
    BotonVisitarComponent,
    BotonAnteriorComponent,
    BotonSiguienteComponent,
    BotonTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,
      {
        useHash: true
      }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
