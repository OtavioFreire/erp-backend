import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../infrastructure/repositories/categories.repository";
import { CategoryResponseDto } from "../domain/dto/category.response.dto";
import { CreateCategoryDto } from "../domain/dto/category-create.dto";
import { SubCategoryResponseDto } from "../domain/dto/subcategory.response.dto";
import { CreateSubCategoryDto } from "../domain/dto/subcategory-create.dto";

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

    async getAllSubCategories(): Promise<SubCategoryResponseDto[]> {
        
        const subCategories = await this.categoriesRepository.getAllSubCategories();
        
        return subCategories;
    }

    async postCreateSubCategory(categoryDto: CreateSubCategoryDto): Promise<SubCategoryResponseDto> {

        const newSubCategory = await this.categoriesRepository.postCreateSubCategory(categoryDto);

        return newSubCategory;
    }
}