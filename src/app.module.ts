import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from '@/infrastructure/persistence/persistence.module';
import { PresentationModule } from '@/infrastructure/presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    PersistenceModule,
    PresentationModule,
  ],
})
export class AppModule {}
