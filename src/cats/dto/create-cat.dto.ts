import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCatDto { //Información que se desea recibir
  @IsString()
  @MinLength(3)
  name:string;

  @IsInt()
  @IsPositive()
  age:number;

  @IsString()
  @IsOptional()
  breed?:string;
}
