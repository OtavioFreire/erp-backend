import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './subcategories/subcategories.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    AuthModule,
    ProductsModule,
    CategoriesModule,
    SubCategoriesModule,
    ProvidersModule]
})
export class AppModule {}