import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307, // Lo expone docker compose
      username: 'user_root',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true, //esto evita tener que llenar el array de entidades.
      // entities: [], // cada entidad en carpeta de entidades
      synchronize: true,
    }),
    BreedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
