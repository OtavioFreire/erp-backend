import { Injectable } from '@nestjs/common';
import { ProductResponseDto } from '../domain/dto/product.response.dto';
import { CreateProductDto } from '../domain/dto/product-create.dto';

@Injectable()
export class ProductsService {
  getHello(): string {
    return 'Hello World!';
  }

  postCreateProduct(productDto: CreateProductDto): ProductResponseDto {
    return productDto;
  }
}
