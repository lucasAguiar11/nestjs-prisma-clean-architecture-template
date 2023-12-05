import { UserEntity } from '@/domain/entities';

export abstract class IUserRepository {
  abstract insert(todo: UserEntity): Promise<void>;
  abstract findAll(): Promise<UserEntity[]>;
}
