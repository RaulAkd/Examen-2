import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioEntity } from './usuario/usuario.entity';
import { MateriaEntity } from './materia/materia.entity';
import { EstudianteEntity } from './estudiante/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EstudianteService } from './estudiante/estudiante.service';
import { MateriaService } from './materia/materia.service';
import { UsuarioService } from './usuario/usuario.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MateriaModule } from './materia/materia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Rpm2033281719.',
      database: 'bddestudiante',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EstudianteModule,
    UsuarioModule,
    MateriaModule,
    TypeOrmModule.forFeature([EstudianteEntity, MateriaEntity, UsuarioEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [AppService, EstudianteService, MateriaService, UsuarioService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
