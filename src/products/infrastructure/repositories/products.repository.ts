import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { CreateProductDto } from "src/products/domain/dto/product-create.dto";
import { ProductResponseDto } from "src/products/domain/dto/product.response.dto";

export class ProductsRepository {
  private readonly PRODUCT_TABLE = 'products';

  constructor(@InjectModel() private readonly knex: Knex) {}
  
  async getProductId(id: string) {
    const product = await this.knex<ProductResponseDto>(this.PRODUCT_TABLE)
      .where('id', id)
      .first();

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  async getAllProducts() {
    const allProducts = await this.knex<ProductResponseDto>(this.PRODUCT_TABLE).select('*');

    return allProducts;
  }

  async postCreateProduct(productDto: CreateProductDto) {
    const newProduct = await this.knex<ProductResponseDto>(this.PRODUCT_TABLE)
      .insert(productDto).returning('*');

    return newProduct[0];
  }
}