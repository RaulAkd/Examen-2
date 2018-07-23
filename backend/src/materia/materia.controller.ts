import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import {MateriaService} from './materia.service';
import {MateriaEntity} from './materia.entity';
// import {ActorPipe} from '../actor/actor.pipe';
// import {ACTOR_SCHEMA} from '../actor/actor.schema';

@Controller('Materia')
export class MateriaController{

    constructor(private _materiaService: MateriaService){}

    @Get('listar')
    async mostrarMaterias(): Promise<MateriaEntity[]>{
        return this._materiaService.listarMaterias();
    }

    @Post('crear')
    // @UsePipes(new MateriaPipe(ACTOR_SCHEMA))
    async crearUno(
        @Body('nombre') nombre,
        @Body('descripcion') descripcion,
        @Body('urlMateria') urlMateria,
        @Body('activo') activo,
        @Body('fechaCreacion') fechaCreacion,
        @Body('numeroHoraPorSemana') numeroHorasPorSemana,
        @Body('idEstudiante') idEstudiante,
    ){
        return this._materiaService.crearMateria(
            nombre, descripcion, urlMateria, activo, fechaCreacion, numeroHorasPorSemana, idEstudiante);
    }

    @Get('obtener/:id')
    async obtenerMateria(@Param() paramParams): Promise<MateriaEntity> {
        return this._materiaService.obtenerMateria(paramParams.id);
    }

    @Post('transferir')
    async transferir(
        @Body('idMateria') id, @Body('idSolicitante') idSolicitante,
    ){
        // return this._peliculaService.pedirTransferencia(idPelicula, idSolicitante);
    }

    @Post('aceptar')
    async aceptarTransferencia(@Body('idPelicula') idPelicula){
        // return this._peliculaService.aceptarTrasnferencia(idPelicula);
    }

    @Post('rechazar')
    async rechazarTransferencia(@Body('idPelicula') idPelicula){
        // return this._peliculaService.rechazarTrasnferencia(idPelicula);
    }

    @Post('buscarLike')
    async buscarMateriaLike(@Body() bodyParams){
        return this._materiaService.encontrarEstudiantesLike(bodyParams.palabra);
    }
}