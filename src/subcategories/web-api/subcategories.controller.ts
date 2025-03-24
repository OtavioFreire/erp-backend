import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CategoryResponseDto } from "src/categories/domain/dto/category.response.dto";
import { CreateSubCategoryDto } from "src/subcategories/domain/dto/subcategory-create.dto";
import { SubCategoryResponseDto } from "src/subcategories/domain/dto/subcategory.response.dto";
import { SubCategoriesService } from "../application/subcategories.service";

@ApiTags('SubCategories')
@Controller('SubCategories')
export class SubCategoriesController {
    constructor(private readonly subcategoriesService: SubCategoriesService) {}
    
    @Get('All')
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    async getSubCategories(): Promise<SubCategoryResponseDto[]> {
        return this.subcategoriesService.getAllSubCategories();
    }

    @Post('Create')
    // @UseGuards(JwtAuthGuard)
    // @ApiBearerAuth()
    postCreateSubCategory(@Body() subCategoryDto : CreateSubCategoryDto): Promise<CategoryResponseDto> {
        return this.subcategoriesService.postCreateSubCategory(subCategoryDto);
    }
}