import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoriesService } from "../application/categories.service";
import { CategoryResponseDto } from "../domain/dto/category.response.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateCategoryDto } from "../domain/dto/category-create.dto";

@ApiTags('Categories')
@Controller('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('All')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getCategories(): Promise<CategoryResponseDto[]> {
      return this.categoriesService.getAllCategories();
  }

  @Post('Create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  postCreateCategory(@Body() categoryDto : CreateCategoryDto): Promise<CategoryResponseDto> {
      return this.categoriesService.postCreateCategory(categoryDto);
  }
}
