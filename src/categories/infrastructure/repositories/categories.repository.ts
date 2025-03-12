import { Knex } from 'knex';
import { CategoryResponseDto } from '../../domain/dto/category.response.dto'
import { InjectModel } from 'nest-knexjs';
import { CreateCategoryDto } from 'src/categories/domain/dto/category-create.dto';
import { SubCategoryResponseDto } from 'src/categories/domain/dto/subcategory.response.dto';
import { CreateSubCategoryDto } from 'src/categories/domain/dto/subcategory-create.dto';

export class CategoriesRepository {
    private readonly CATEGORY_TABLE = 'categories';
    private readonly SUBCATEGORY_TABLE = 'subcategories';

    constructor(@InjectModel() private readonly knex: Knex) {}

    async getAllCategories() {
        const categories = await this.knex<CategoryResponseDto>(this.CATEGORY_TABLE).select();

        return categories;
    }

    async postCreateCategory(categoryDto: CreateCategoryDto) {
        const newCategory = await this.knex<CategoryResponseDto>(this.CATEGORY_TABLE).insert(categoryDto).returning('*');

        return newCategory[0];
    }

    async getAllSubCategories() {
        const subCategories = await this.knex<SubCategoryResponseDto>(this.SUBCATEGORY_TABLE).select();

        return subCategories;
    }

    async postCreateSubCategory(subcategoryDto: CreateSubCategoryDto) {
        const newSubCategory = await this.knex<SubCategoryResponseDto>(this.SUBCATEGORY_TABLE).insert(subcategoryDto).returning('*');

        return newSubCategory[0];
    }
}