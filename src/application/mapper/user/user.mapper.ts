import { UserDTO } from 'src/application/dtos/user/user.dto';
import { UserEntity } from 'src/domain/entities';
export class UserMapper {
  private constructor() {
    throw new Error(
      'UserMapper is a static class and should not be instantiated',
    );
  }
  public static toDTO(entity: UserEntity): UserDTO {
    return {
      id: entity.id,
      name: entity.name,
    };
  }
}
