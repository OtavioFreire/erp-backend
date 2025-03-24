import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../infrastructure/repositories/categories.repository";
import { CategoryResponseDto } from "../domain/dto/category.response.dto";
import { CreateCategoryDto } from "../domain/dto/category-create.dto";

@Injectable()
export class CategoriesService {

    constructor(private readonly categoriesRepository: CategoriesRepository) {}
    
    async getAllCategories(): Promise<CategoryResponseDto[]> {
        
        const categories = await this.categoriesRepository.getAllCategories();
        
        return categories;
    }

    async postCreateCategory(categoryDto: CreateCategoryDto): Promise<CategoryResponseDto> {

        const category = await this.categoriesRepository.postCreateCategory(categoryDto);

        return category;
    }

}