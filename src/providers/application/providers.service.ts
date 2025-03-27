import { Injectable } from "@nestjs/common";
import { ProviderResponseDto } from "../domain/dto/provider.response";
import { ProvidersRepository } from "../infrastructure/providers.repository";


@Injectable()
export class ProvidersService {
    constructor(private readonly providersRepository: ProvidersRepository) {}

    async getAllProviders(): Promise<ProviderResponseDto[]> {
        const allProducts = await this.providersRepository.getAllProviders();
        return allProducts;
    }

    async createProvider(providerName: string): Promise<ProviderResponseDto> {
        const newProvider = await this.providersRepository.createProvider(providerName);

        return newProvider;
    }
    
}