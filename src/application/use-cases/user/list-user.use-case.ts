import { UserDTO } from '@/application/dtos/user/user.dto';
import { UserMapper } from '@/application/mapper/user/user.mapper';
import { IUserRepository } from '@/domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { UseCase } from '@/application/use-cases/use-case.interface';

@Injectable()
export class ListUserUseCase implements UseCase<void, UserDTO[]> {
  constructor(private readonly repository: IUserRepository) {}
  async execute(): Promise<UserDTO[]> {
    const users = await this.repository.findAll();
    return users.map((user) => UserMapper.toDTO(user));
  }
}
