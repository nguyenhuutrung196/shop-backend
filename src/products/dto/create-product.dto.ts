import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
	@ApiProperty({ example: 'Đèn LED 5mm' })
	@IsString({ message: 'Tên linh kiện là chữ' })
	name!: string;

	@ApiProperty({ example: 10000 })
	@IsNumber({}, { message: 'Giá linh kiện phải là số' })
	@Min(0, { message: 'Giá linh kiện phải lớn hơn hoặc bằng 0' })
	price!: number;
}
