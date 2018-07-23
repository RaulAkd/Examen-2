import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsuarioEntity} from './usuario.entity';
import {UsuarioService} from './usuario.service';

@Controller('Usuario')
export class UsuarioController{

    constructor(private _usuarioService: UsuarioService){}

    @Get('mostrar')
    async mostrarUsuarios(){
        return this._usuarioService.mostrarUsuarios();
    }

    @Get('listarPorActor/:id')
    async listarElementosUsuario(@Param() paramParams){
        return this._usuarioService.mostrarEstudiantesUsuario(paramParams.id);
    }

    @Get('obtener/:id')
    async obtenerUsuario(@Param() paramParams): Promise<UsuarioEntity> {
        return this._usuarioService.obtenerUsuario(paramParams.id);
    }

    @Post('crear')
    async crearUsuario(
        @Body('nombre') nombre,
        @Body('apellido') apellido,
        @Body('correo') correo,
        @Body('password') password,
        @Body('url_foto') urlImg,
    ){
        return this._usuarioService.crearUsuario(nombre, apellido, correo, password, urlImg);
    }

    @Post('buscarLike')
    async encontrarUsuariosLike(@Body('palabra') palabra){
        return this._usuarioService.encontrarEstudianteLike(palabra);
    }
}