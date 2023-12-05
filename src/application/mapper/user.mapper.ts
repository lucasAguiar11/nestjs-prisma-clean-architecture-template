import { UserEntity } from 'src/domain/entities';
import { UserDTO } from '../dtos/user/user.dto';
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
