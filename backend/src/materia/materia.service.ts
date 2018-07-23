import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {MateriaEntity} from './materia.entity';
import {Repository} from 'typeorm';
import {EstudianteService} from '../estudiante/estudiante.service';
import {UsuarioService} from '../usuario/usuario.service';
import {EstudianteEntity} from '../estudiante/estudiante.entity';

@Injectable()
export class MateriaService{

    constructor(
        @InjectRepository(MateriaEntity)
        private readonly _materiaRepositorio: Repository<MateriaEntity>,
        private _estudianteService: EstudianteService,
        private _usuarioService: UsuarioService,
    ){}

    async listarMaterias(): Promise<MateriaEntity[]> {
        return await this._materiaRepositorio.find({
            order: { nombre: 'ASC'},
        });
    }

    async crearMateria(
        nombre, descripcion, urlImg, activo, fechaCreacion, numeroHorasPorSemana, idEstudiante): Promise<MateriaEntity>{
        const materia = new MateriaEntity();
        materia.nombre = nombre;
        materia.descripcion = descripcion;
        materia.urlImg = urlImg;
        materia.activo = activo;
        materia.fechaCreacion = fechaCreacion;
        materia.numeroHorasPorSemana = numeroHorasPorSemana;

        const estudiante = await this._estudianteService.mostrarEstudiante(idEstudiante);
        materia.estudiante = estudiante;
        return await this._materiaRepositorio.save(materia);
    }

    async obtenerMateria(id: number): Promise<MateriaEntity>{
        return await this._materiaRepositorio.findOne(id);
    }

    async eliminar(materia){
        await this._materiaRepositorio.remove(materia);
    }

    async pedirTransferencia(idMateria: number, idSolicitante: number){
        const materia = await this._materiaRepositorio.findOne(
            {
                where: {
                    id: idMateria,
                    solicitudTransferencia: false,
                },
            },
        );
        // materia.solicitudTransferencia = true;
        // materia.solicitanteId = idSolicitante;

        return await this._materiaRepositorio.save(materia);
    }

    async aceptarTrasnferencia(idMateria: number){
        const materia = await this._materiaRepositorio.findOne(
                {
                    where: {
                        id: idMateria,
                        solicitudTransferencia: true,
                    },
                },
            );
        // const idUsuarioSolicitante = materia.solicitanteId;
        // const actor = await this._estudianteService.mostrarEstudiante(idUsuarioSolicitante);
        // console.log(actor);
        // pelicula.solicitudTransferencia = false;
        // pelicula.solicitanteId = 0;
        // pelicula.actor = actor;
        return await this._materiaRepositorio.save(materia);

    }

    async rechazarTrasnferencia(idMateria: number){
        const materia = await this._materiaRepositorio.findOne(
            {
                where: {
                    id: idMateria,
                    solicitudTransferencia: true,
                },
            },
        );
        // materia.solicitudTransferencia = false;
        // pelicula.solicitanteId = 0;
        return await this._materiaRepositorio.save(materia);

    }

    async encontrarEstudiantesLike(palabra: string){
        return await this._materiaRepositorio
            .createQueryBuilder('pelicula')
            .where('upper(pelicula.nombre) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();
    }
}
