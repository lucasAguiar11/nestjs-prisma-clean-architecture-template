export interface Mapper<From, To> {
  to(entity: From): To;
}
