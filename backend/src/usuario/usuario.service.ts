import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { EstudianteService } from '../estudiante/estudiante.service';
import { EstudianteEntity } from '../estudiante/estudiante.entity';

@Injectable()
export class UsuarioService{

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepositorio: Repository<UsuarioEntity>,
    ){}

    async mostrarUsuarios(): Promise<UsuarioEntity[]>{
        return await this._usuarioRepositorio.find({
            order: {
                nombre: 'ASC',
            },
        });
    }

    async mostrarEstudiantesUsuario(idUsuario){
        return this._usuarioRepositorio.find({
            relations: ['estudiantes'],
            where: {id: idUsuario},
        });
    }

    async crearUsuario(nombre, apellido, correo, password, urlImg){
        const usuario = new UsuarioEntity();
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.correo = correo;
        usuario.password = password;
        usuario.urlImg = urlImg;
        return await this._usuarioRepositorio.save(usuario);
    }

    async obtenerUsuario(id: number): Promise<UsuarioEntity>{
        return await this._usuarioRepositorio.findOne(id);
    }

    async verificaUsuario(correo, password){
        return await this._usuarioRepositorio.findOne({
            where: {
                correo: 'correo',
                password: 'password',
            },
        });
    }

    async encontrarEstudianteLike(palabra: string){
        return await this._usuarioRepositorio
            .createQueryBuilder('usuario')
            .where('upper(usuario.nombre) like :palabra', {palabra: '%' + palabra + '%'})
            .orWhere('upper(usuario.apellido) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();
    }

}
