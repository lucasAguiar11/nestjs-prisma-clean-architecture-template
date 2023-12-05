import { IUserRepository } from '@/domain/repositories/user-repository.interface';
import { Module } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/persistence/prisma/prisma.service';
import { PrismaUsersRepository } from '@/infrastructure/persistence/prisma/repositories/user.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: IUserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [
    {
      provide: IUserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class PersistenceModule {}
