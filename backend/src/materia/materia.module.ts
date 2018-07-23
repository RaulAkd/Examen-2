import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from '@nestjs/common';
import {MateriaEntity} from './materia.entity';
import {MateriaService} from './materia.service';
import {MateriaController} from './materia.controller';
import {EstudianteModule} from '../estudiante/estudiante.module';
import {UsuarioModule} from '../usuario/usuario.module';

@Module({
    imports: [TypeOrmModule.forFeature([MateriaEntity]), EstudianteModule, UsuarioModule],
    providers: [MateriaService],
    controllers: [MateriaController],
})

export class MateriaModule{}