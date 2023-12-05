import { CreateUserDTO } from '@/application/dtos/user/create-user.dto';
import { UserEntity } from '@/domain/entities';

export class CreateUserMapper {
  private constructor() {
    throw new Error(
      'DTOCreateUserMapper is a static class and should not be instantiated',
    );
  }
  public static toEntity(entity: CreateUserDTO): UserEntity {
    return new UserEntity({
      name: entity.name,
      email: entity.email,
    });
  }
}
