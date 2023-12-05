import { CreateUserDTO } from '@/application/dtos/user/create-user.dto';
import { CreateUserMapper } from '@/application/mapper/user/create-user.mapper';
import { IUserRepository } from '@/domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { UseCase } from '@/application/use-cases/use-case.interface';

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserDTO, void> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(request: CreateUserDTO): Promise<void> {
    const entity = CreateUserMapper.toEntity(request);
    await this.repository.insert(entity);
  }
}
