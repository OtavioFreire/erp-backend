import { Injectable } from '@nestjs/common';
import { ProductDto } from '../domain/dto/products.dto';

@Injectable()
export class ProductsService {
  getHello(): string {
    return 'Hello World!';
  }

  postCreateProduct(productDto: ProductDto): ProductDto {
    return productDto;
  }
}
