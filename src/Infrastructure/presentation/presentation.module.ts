import { Module } from '@nestjs/common';
import { PersistenceModule } from 'src/Infrastructure/persistence/persistence.module';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user.use-case';
import { ListUserUseCase } from 'src/application/use-cases/user/list-user.use-case';

@Module({
  imports: [PersistenceModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, ListUserUseCase],
})
export class PresentationModule {}
