import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EstudianteEntity} from './estudiante.entity';
import {EstudianteService} from './estudiante.service';
import {EstudianteController} from './estudiante.controller';
import {UsuarioModule} from '../usuario/usuario.module';
import {UsuarioService} from '../usuario/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([EstudianteEntity]), UsuarioModule],
    providers: [EstudianteService],
    controllers: [EstudianteController],
    exports: [EstudianteService],
})

export class EstudianteModule{}