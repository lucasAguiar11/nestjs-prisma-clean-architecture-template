import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/user.repository';
import { IUserRepository } from 'src/domain/repositories/user-repository.interface';

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
