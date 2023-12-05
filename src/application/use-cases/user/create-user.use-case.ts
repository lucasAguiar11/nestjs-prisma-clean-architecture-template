import { Injectable } from '@nestjs/common';
import { UseCase } from '../use-case.interface';
import { CreateUserDTO } from 'src/application/dtos/user/create-user.dto';
import { IUserRepository } from 'src/domain/repositories/user-repository.interface';
import { CreateUserMapper } from 'src/application/mapper/user/create-user.mapper';

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserDTO, void> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(request: CreateUserDTO): Promise<void> {
    const entity = CreateUserMapper.toEntity(request);
    await this.repository.insert(entity);
  }
}
