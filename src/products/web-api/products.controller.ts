import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductsService } from "../application/products.service";
import { CreateProductDto } from "../domain/dto/product-create.dto";
import { ProductResponseDto } from "../domain/dto/product.response.dto";

@ApiTags('Products')
@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('GetId:id')
  getProducts(@Param('id') id : string): Promise<ProductResponseDto> {
    return this.productsService.getProductId(id);
  }

  @Get('All')
  getAllProducts(): Promise<ProductResponseDto[]> {
    return this.productsService.getAllProducts();
  }

  @Get('colors')
  getAllColors() {
    return [{id: 1, color: 'red'}];
  }

  @Post('Create')
  postCreateProducts(@Body() productDto : CreateProductDto): Promise<ProductResponseDto> {
    return this.productsService.postCreateProduct(productDto);
  }
}