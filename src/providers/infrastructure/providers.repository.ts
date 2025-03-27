import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { ProviderResponseDto } from "../domain/dto/provider.response";


export class ProvidersRepository {

    constructor(@InjectModel() private readonly knex: Knex) {}
    
    async getAllProviders(): Promise<ProviderResponseDto[]>{
        const allProviders = await this.knex<ProviderResponseDto>('providers').select('*');

        return allProviders;
    }

    async createProvider(providerName: string): Promise<ProviderResponseDto> {
        const newProvider = await this.knex<ProviderResponseDto>('providers').insert({name: providerName}).returning('*');

        return newProvider[0];
    }
}