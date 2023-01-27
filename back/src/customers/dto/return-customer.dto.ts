import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class ReturnCustomerDto {
  @ApiProperty({
    description: 'Customer first name',
  })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({ description: 'Customer last name' })
  @IsString()
  @IsNotEmpty()
  customerSurname: string;

  @ApiProperty({ description: 'Customers phone number' })
  @IsPhoneNumber()
  @IsNotEmpty()
  customerPhone: string;
}
