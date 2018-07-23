import {Body, Controller, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import {EstudianteService} from './estudiante.service';
import {EstudianteEntity} from './estudiante.entity';
// import {ActorPipe} from './actor.pipe';
// import {ACTOR_SCHEMA} from './actor.schema';

@Controller('Estudiante')
export class EstudianteController{
    constructor(private _estudianteService: EstudianteService) {
    }

    @Get('listar')
    async mostrarTodos(){
        return this._estudianteService.mostrarEstudiantes();
    }

    @Get('listarPeliculas/:id')
    async listarEstudianteUsuario(@Param() paramParams){
        return this._estudianteService.listarEstudianteMaterias(paramParams.id);
    }

    @Post('crear')
    // @UsePipes(new ActorPipe(ACTOR_SCHEMA))
    async crearUno(
        @Body('nombre') nombre,
        @Body('apellido') apellido,
        @Body('fechaNacimiento') fechaNacimiento,
        @Body('semestreActual') semestreActual,
        @Body('graduado') graduado,
        @Body('urlImg') urlImg,
        @Body('idUsuario') idUsuario,
    ){
        return this._estudianteService.crearEstudiante(
            nombre, apellido, fechaNacimiento, semestreActual, graduado, urlImg, idUsuario);
    }

    @Get('obtener/:id')
    async mostrarEstudiante(@Param() paramParams): Promise<EstudianteEntity> {
        return this._estudianteService.mostrarEstudiante(paramParams.id);
    }

    @Post('buscarLike')
    async encontrarEstudiantesLike(@Body('palabra') palabra){
        return this._estudianteService.encontrarEstudiantesLike(palabra);
    }

}