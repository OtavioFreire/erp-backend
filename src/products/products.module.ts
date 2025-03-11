import { Module } from "@nestjs/common";
import { ProductsController } from "./web-api/products.controller";
import { ProductsService } from "./application/products.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [AuthModule],
    controllers: [ProductsController],
    providers: [ProductsService]
})

export class ProductsModule {}