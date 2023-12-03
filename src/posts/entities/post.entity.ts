import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

export class Post {
    @IsNotEmpty()
  @IsString()
  @MaxLength(2200)
  text: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  author: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  replyToComment?: number;
}
