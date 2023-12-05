import { UserEntity } from '@/domain/entities';
import { IUserRepository } from '@/domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/persistence//prisma/prisma.service';
import { PrismaUserMapper } from '@/infrastructure/persistence/prisma/mappers/prisma-user-mapper';

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
