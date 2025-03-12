import { Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductsService } from "../application/products.service";
import { ProductResponseDto } from "../domain/dto/product.response.dto";
import { CreateProductDto } from "../domain/dto/product-create.dto";

@ApiTags('Products')
@Controller('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getProducts(): string {
      return this.productsService.getHello();
  }

  @Get('All')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getAllProducts(): string {
      return this.productsService.getHello();
  }

  @Post('Create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  postCreateProducts(@Body() productDto : CreateProductDto): ProductResponseDto {
      return this.productsService.postCreateProduct(productDto);
  }

  @Post('Update')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  postUpdateProducts(@Body() productDto : CreateProductDto): string {
      return this.productsService.getHello();
  }

  @Delete('Delete')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  postDeleteProducts(): string {
      return this.productsService.getHello();
  }
}