import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { MateriaEntity } from '../materia/materia.entity';

@Entity('estudiante')
export class EstudianteEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column({ length: 100 })
  semestreActual: string;

  @Column({ length: 10 })
  graduado: string;

  @Column({ length: 100 })
  urlImg: string;

  @ManyToOne(type => UsuarioEntity, usuario => usuario.estudiantes)
  usuario: UsuarioEntity;

  @OneToMany(type => MateriaEntity, materia => materia.estudiante)
  materias: MateriaEntity[];
}