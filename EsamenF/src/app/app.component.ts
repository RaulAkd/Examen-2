import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  usuarios = [
    {
      id: 1,
      nombre: 'Raul Molina',
      nombreImagen: 'usuario1.png',
      estudiantesId: [2, 3, 6, 8]
    },
    {
      id: 2,
      nombrePerfil: 'Francisco Robles',
      nombreImagen: 'usuario2.png',
      estudiantesId: [1, 4, 5, 7]
    }
  ];

  estudiantes = [
    {
      id: 1,
      nombre: 'Cristofer Quiroz',
      nombreImagen: 'estudiante1.png',
      materiasId: [1, 2, 3, 5]
    },
    {
      id: 2,
      nombrePerfil: 'Antony Alangasi',
      nombreImagen: 'estudiante2.png',
      materiasId: [2, 5, 6]
    },
    {
      id: 3,
      nombrePerfil: 'Fernanda Leon',
      nombreImagen: 'estudiante3.png',
      estudiantesId: [5, 6]
    },
    {
      id: 4,
      nombrePerfil: 'Marcela Molina',
      nombreImagen: 'estudiante4.png',
      estudiantesId: [1, 4, 7, 8, 9]
    },
    {
      id: 5,
      nombrePerfil: 'Fernando Ramirez',
      nombreImagen: 'estudiante5.png',
      estudiantesId: [2, 4, 7, 8]
    },
    {
      id: 6,
      nombrePerfil: 'Julia Andrade',
      nombreImagen: 'estudiante6.png',
      estudiantesId: [1, 3, 6, 10]
    },
    {
      id: 7,
      nombrePerfil: 'Marcelo Zambrano',
      nombreImagen: 'estudiante7.png',
      estudiantesId: [3, 5, 7]
    },
    {
      id: 8,
      nombrePerfil: 'Andrea Guarderas',
      nombreImagen: 'estudiante8.png',
      estudiantesId: [1, 2, 6, 8]
    },
    {
      id: 9,
      nombrePerfil: 'Elizabeth Lopez',
      nombreImagen: 'estudiante9.png',
      estudiantesId: [1, 4, 5, 7]
    },
    {
      id: 10,
      nombrePerfil: 'Juan Estevez',
      nombreImagen: 'estudiante10.png',
      estudiantesId: [4, 6, 8, 9 ]
    }
  ];

  materias = [
    {
      id: 1,
      nombre: 'Aplicaciones Web',
      nombreImagen: 'materia1.png',
    },
    {
      id: 2,
      nombrePerfil: 'Programacion',
      nombreImagen: 'materia2.png',
    },
    {
      id: 3,
      nombre: 'Fisica',
      nombreImagen: 'materia3.png',
    },
    {
      id: 4,
      nombre: 'Matematica',
      nombreImagen: 'materia4.png',
    },
    {
      id: 5,
      nombre: 'Calculo',
      nombreImagen: 'materia5.png',
    },
    {
      id: 6,
      nombre: 'Lenguaje',
      nombreImagen: 'materia6.png',
    },
    {
      id: 7,
      nombre: 'Moviles',
      nombreImagen: 'materia7.png',
    },
    {
      id: 8,
      nombre: 'Auditoria',
      nombreImagen: 'materia8.png',
    },
    {
      id: 9,
      nombre: 'Computacion',
      nombreImagen: 'materia9.png',
    },
    {
      id: 10,
      nombre: 'Ingles',
      nombreImagen: 'materia10.png',
    }
  ];
}
