import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './subcategories/subcategories.module';
import { ProvidersModule } from './providers/providers.module';
import { LoggerModule } from './logger/logger.module';
import { SalesModule } from './sales/sales.module';
import { CustomersModule } from './customer/customers.module';

@Module({
  imports: [
    AuthModule,
    ProductsModule,
    CategoriesModule,
    SubCategoriesModule,
    ProvidersModule,
    SalesModule,
    CustomersModule,
    LoggerModule]
})
export class AppModule {}