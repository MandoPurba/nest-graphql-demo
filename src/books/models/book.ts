import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  bookId: string;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  isRead?: boolean;
}
