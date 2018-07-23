import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioService } from '../usuario/usuario.service';
import { MateriaEntity } from '../materia/materia.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { MateriaService } from '../materia/materia.service';

@Injectable()
export class EstudianteService{

    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly _estudianteRepositorio: Repository<EstudianteEntity>,
        private _usuarioService: UsuarioService,
    ){}

    async mostrarEstudiantes(): Promise<EstudianteEntity[]>{
        return await this._estudianteRepositorio.find({ order: { nombre: 'ASC'}});
    }

    async listarEstudianteMaterias(idEstudiante){
        return this._estudianteRepositorio.find({relations: ['materias'], where: { id: idEstudiante}, order: {nombre: 'ASC'}});
    }

    async obtenerMateriasPorEstudiante(id){
        return await this._estudianteRepositorio.findOne(id, {relations: ['materias']});
    }

    async crearEstudiante(nombre, apellido, fechaNacimiento, semestreActual, graduado, urlImg, idUsuario){
        const estudiante = new EstudianteEntity();
        estudiante.nombre = nombre;
        estudiante.apellido = apellido;
        estudiante.fechaNacimiento = fechaNacimiento;
        estudiante.semestreActual = semestreActual;
        estudiante.graduado = graduado;
        estudiante.urlImg = urlImg;

        // busco al usuario para agregar relacion FK
        const usuario = await this._usuarioService.obtenerUsuario(idUsuario);
        estudiante.usuario = usuario;
        // estudiante.usuario = usuarioa;

        await this._estudianteRepositorio.save(estudiante);
    }

    async mostrarEstudiante(id: number): Promise<EstudianteEntity>{
        return await this._estudianteRepositorio.findOne(id);
    }

    async encontrarEstudiantesLike(palabra: string){
        return await this._estudianteRepositorio
            .createQueryBuilder('estudiante')
            .where('upper(estudiante.nombre) like :palabra', {palabra: '%' + palabra + '%'})
            .orWhere('upper(actor.apellido) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();

    }

}
