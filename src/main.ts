import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe()); // Kích hoạt validation toàn cục

	// Đoạn này để tạo màn hình điều khiển
	const config = new DocumentBuilder()
		.setTitle('Cửa hàng linh kiện 2026')
		.setDescription('Hệ thống quản lý bán hàng')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document); // Đường dẫn là localhost:3000/api

	await app.listen(3000);
}
bootstrap();
