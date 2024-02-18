import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";
@Entity()
export class Cat { //Configura la entidad en base de datos

  @Column({primary: true, generated: true})
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(()=>Breed, (breed)=>breed.id, {eager:true}) //eager trae las razas al consultar por gatos.
  breed: Breed;
} 