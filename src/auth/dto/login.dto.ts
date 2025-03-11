import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'otavio', description: 'Username' })
  username: string;

  @ApiProperty({ example: 'pass123', description: 'Password' })
  password: string;
}
