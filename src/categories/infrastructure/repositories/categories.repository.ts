import { Knex } from 'knex';
import { CategoryResponseDto } from '../../domain/dto/category.response.dto'
import { InjectModel } from 'nest-knexjs';
import { CreateCategoryDto } from 'src/categories/domain/dto/category-create.dto';

export class CategoriesRepository {
    private readonly CATEGORY_TABLE = 'categories';

    constructor(@InjectModel() private readonly knex: Knex) {}

    async getAllCategories() {
        const categories = await this.knex<CategoryResponseDto>(this.CATEGORY_TABLE).select();

        return categories;
    }

    async postCreateCategory(categoryDto: CreateCategoryDto) {
        const newCategory = await this.knex<CategoryResponseDto>(this.CATEGORY_TABLE).insert(categoryDto).returning('*');

        return newCategory[0];
    }
}