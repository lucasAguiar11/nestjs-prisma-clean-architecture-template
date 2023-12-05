import { CreateUserUseCase } from '@/application/use-cases/user/create-user.use-case';
import { ListUserUseCase } from '@/application/use-cases/user/list-user.use-case';
import { Module } from '@nestjs/common';
import { PersistenceModule } from '@/infrastructure/persistence/persistence.module';
import { UserController } from '@/infrastructure/presentation/controllers/user.controller';

@Module({
  imports: [PersistenceModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, ListUserUseCase],
})
export class PresentationModule {}
