import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateBookInput {
  @Field()
  @IsString()
  @IsOptional()
  bookId?: string;

  @Field()
  @IsString()
  @IsOptional()
  title?: string;

  @Field()
  @IsString()
  @IsOptional()
  category?: string;

  @Field()
  @IsBoolean()
  @IsOptional()
  isRead?: boolean;
}
