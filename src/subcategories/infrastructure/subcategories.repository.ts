import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { SubCategoryResponseDto } from "../domain/dto/subcategory.response.dto";
import { CreateSubCategoryDto } from "../domain/dto/subcategory-create.dto";


export class SubCategoriesRepository {
    private readonly SUBCATEGORY_TABLE = 'subcategories';

    constructor(@InjectModel() private readonly knex: Knex) {}
    
    async getAllSubCategories() {
        const subCategories = await this.knex<SubCategoryResponseDto>(this.SUBCATEGORY_TABLE).select();

        return subCategories;
    }

    async postCreateSubCategory(subcategoryDto: CreateSubCategoryDto) {
        const newSubCategory = await this.knex<SubCategoryResponseDto>(this.SUBCATEGORY_TABLE).insert(subcategoryDto).returning('*');

        return newSubCategory[0];
    }
} 