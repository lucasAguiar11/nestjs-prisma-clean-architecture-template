import { IEntity } from '../base/entity.interface';

export interface UserProps {
  name: string;
  email: string;
  password?: string;
}

export class UserEntity implements IEntity {
  private props: UserProps;
  private _id: number;
  private _password: string;

  constructor(props: UserProps, id?: number) {
    if (id) this._id = id;

    if (props.password) this._password = props.password;
    else this._password = props.email + Math.random().toString(36).substring(7);

    this.props = {
      ...props,
    };
  }

  public get password(): string {
    return this._password;
  }

  public get id(): number {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof UserEntity)) return false;
    return this.id === entity.id;
  }
}
