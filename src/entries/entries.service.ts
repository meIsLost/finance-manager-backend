import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry) private entriesRepository: Repository<Entry>,
  ) {}

  create(createEntryDto: CreateEntryDto) {
    return this.entriesRepository.save(createEntryDto);
  }

  findAll() {
    return `This action returns all entries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }

  update(id: number, updateEntryDto: UpdateEntryDto) {
    return this.entriesRepository.save(updateEntryDto);
  }

  remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
