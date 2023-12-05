import { Injectable } from '@nestjs/common';
import { UseCase } from '../use-case.interface';
import { IUserRepository } from 'src/domain/repositories/user-repository.interface';
import { UserDTO } from 'src/application/dtos/user/user.dto';
import { UserMapper } from 'src/application/mapper/user.mapper';

@Injectable()
export class ListUserUseCase implements UseCase<void, UserDTO[]> {
  constructor(private readonly repository: IUserRepository) {}
  async execute(): Promise<UserDTO[]> {
    const users = await this.repository.findAll();
    return users.map((user) => UserMapper.toDTO(user));
  }
}
