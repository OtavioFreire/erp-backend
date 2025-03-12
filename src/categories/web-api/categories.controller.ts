import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoriesService } from "../application/categories.service";
import { CategoryResponseDto } from "../domain/dto/category.response.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateCategoryDto } from "../domain/dto/category-create.dto";
import { SubCategoryResponseDto } from "../domain/dto/subcategory.response.dto";
import { CreateSubCategoryDto } from "../domain/dto/subcategory-create.dto";


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

  @Get('AllSubCategories')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getSubCategories(): Promise<SubCategoryResponseDto[]> {
      return this.categoriesService.getAllSubCategories();
  }

  @Post('CreateSubCategory')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  postCreateSubCategory(@Body() subCategoryDto : CreateSubCategoryDto): Promise<CategoryResponseDto> {
      return this.categoriesService.postCreateSubCategory(subCategoryDto);
  }
}
