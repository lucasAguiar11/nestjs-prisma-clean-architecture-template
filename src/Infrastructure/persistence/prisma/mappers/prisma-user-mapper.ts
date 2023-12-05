import { User as PrismaUser } from '@prisma/client';
import { UserEntity } from 'src/domain/entities';
export class PrismaUserMapper {
  private constructor() {
    throw new Error(
      'PrismaUserMapper is a static class and should not be instantiated',
    );
  }

  public static toPrisma(user: UserEntity): PrismaUser {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    } as PrismaUser;
  }

  public static toDomain(prismaUserData: PrismaUser) {
    return new UserEntity(
      { name: prismaUserData.name, email: prismaUserData.email },
      prismaUserData.id,
    );
  }
}
