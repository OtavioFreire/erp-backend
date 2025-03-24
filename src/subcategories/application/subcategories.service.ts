import { Injectable } from "@nestjs/common";
import { CreateSubCategoryDto } from "../domain/dto/subcategory-create.dto";
import { SubCategoryResponseDto } from "../domain/dto/subcategory.response.dto";
import { SubCategoriesRepository } from "../infrastructure/subcategories.repository";


@Injectable()
export class SubCategoriesService {

    constructor(private readonly subCategoriesRepository: SubCategoriesRepository) {}
    
    async getAllSubCategories(): Promise<SubCategoryResponseDto[]> {
        
        const subCategories = await this.subCategoriesRepository.getAllSubCategories();
        
        return subCategories;
    }

    async postCreateSubCategory(categoryDto: CreateSubCategoryDto): Promise<SubCategoryResponseDto> {

        const newSubCategory = await this.subCategoriesRepository.postCreateSubCategory(categoryDto);

        return newSubCategory;
    }
}