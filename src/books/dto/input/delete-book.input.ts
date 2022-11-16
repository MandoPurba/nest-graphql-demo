import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteBookInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  bookId: string;
}
