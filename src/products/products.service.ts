import { Injectable } from "@nestjs/common";
import { ProductDto } from "./dto/products.dto";

@Injectable()
export class ProductsService {
    getHello(): string {
        return 'Hello World!';
    }

    postCreateProducts(productDto : ProductDto): string {
        return 'Hello World!';
    }
}