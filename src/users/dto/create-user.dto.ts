import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: 'test@cloud.dev'
  })
  email: string;
  @ApiProperty({
    default: 'admin_test'
  })
  fullName: string;
  @ApiProperty(
    {default: 'qwertyhuerty'
  })
  password: string;
}
