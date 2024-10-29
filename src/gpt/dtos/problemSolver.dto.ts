import { IsInt, IsOptional, IsString } from 'class-validator';

export class ProblemSolverDto {
  @IsString()
  readonly prompt: string;
  readonly userId: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
