import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { EstudianteEntity } from '../estudiante/estudiante.entity';

@Entity('usuario')
export class UsuarioEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 100 })
  correo: string;

  @Column({ length: 500 })
  password: string;

  @Column({ length: 500 })
  urlImg: string;

  @OneToMany(type => EstudianteEntity, estudiante => estudiante.usuario)
  estudiantes: EstudianteEntity[];
}