import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetBookArgs {
  @Field()
  @IsNotEmpty()
  bookId: string;
}
