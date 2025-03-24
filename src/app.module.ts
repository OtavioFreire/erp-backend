import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './subcategories/subcategories.module';

@Module({
  imports: [
    AuthModule,
    ProductsModule,
    CategoriesModule,
    SubCategoriesModule]
})
export class AppModule {}