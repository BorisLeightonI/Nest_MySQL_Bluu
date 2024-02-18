import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {
  //Escrito
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>
  ){}

  async create(createCatDto: CreateCatDto) {
    // const cat = this.catRepository.create(createCatDto);
    // return await this.catRepository.save(cat); //tambien sirve pasar directamente createCatDto, pero parece que no valida.
    const breed = await this.breedRepository.findOneBy({name: createCatDto.breed})
    if(!breed){
      throw new BadRequestException('Breed not found');
    }

    return await this.catRepository.save({
      ...createCatDto,
      breed,
    })
  }

  async findAll() {
    return this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({id});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.catRepository.softRemove({id});
  }
}
