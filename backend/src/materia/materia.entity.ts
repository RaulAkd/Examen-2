import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { EstudianteEntity } from 'estudiante/estudiante.entity';

@Entity('materia')
export class MateriaEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 200 })
  descripcion: string;

  @Column({ length: 500 })
  urlImg: string;

  @Column({ length: 50 })
  activo: string;

  @Column({ type: 'date' })
  fechaCreacion: Date;

  @Column({ type: 'int' })
  numeroHorasPorSemana: number;

  @ManyToOne(type => EstudianteEntity, estudiante => estudiante.materias)
  estudiante: EstudianteEntity;
}