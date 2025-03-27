import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
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

  @Post('Create')
  postCreateProducts(@Body() productDto : CreateProductDto): Promise<ProductResponseDto> {
      return this.productsService.postCreateProduct(productDto);
  }

  @Post('Update')
  postUpdateProducts(@Body() productDto : CreateProductDto): string {
      return '';
  }

  @Delete('Delete')
  postDeleteProducts(): string {
      return '';
  }
}