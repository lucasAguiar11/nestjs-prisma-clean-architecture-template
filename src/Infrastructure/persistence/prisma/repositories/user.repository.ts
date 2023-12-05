import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserEntity } from 'src/domain/entities';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { IUserRepository } from 'src/domain/repositories/user-repository.interface';

@Injectable()
export class PrismaUsersRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async insert(user: UserEntity): Promise<void> {
    const userPrismaData = PrismaUserMapper.toPrisma(user);
    await this.prismaService.user.create({
      data: userPrismaData,
    });
  }
  async findAll(): Promise<UserEntity[]> {
    const users = await this.prismaService.user.findMany();
    return users.map(PrismaUserMapper.toDomain);
  }
}
