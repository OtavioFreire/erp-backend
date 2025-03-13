import { Injectable } from '@nestjs/common';
import { ProductResponseDto } from '../domain/dto/product.response.dto';
import { CreateProductDto } from '../domain/dto/product-create.dto';
import { ProductsRepository } from '../infrastructure/repositories/products.repository';

@Injectable()
export class ProductsService {

  constructor (private readonly productsRepository: ProductsRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllProducts(): Promise<ProductResponseDto[]> {
    const allProducts = await this.productsRepository.getAllProducts();

    return allProducts;
  }

  async postCreateProduct(productDto: CreateProductDto): Promise<ProductResponseDto> {

    const newProduct = await this.productsRepository.postCreateProduct(productDto);

    return newProduct;
  }
}

