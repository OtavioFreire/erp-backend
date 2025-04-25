import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProvidersService } from "../application/providers.service";
import { ProviderResponseDto } from "../domain/dto/provider.response";
import { CreateProviderDto } from "../domain/dto/provider-create.dto";

@ApiTags('Providers')
@Controller('Providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('All')
  async getAllProviders(): Promise<ProviderResponseDto[]> {
    return this.providersService.getAllProviders();
  }   

  @Post('Create')
  async createProvider(@Body() provider : CreateProviderDto): Promise<ProviderResponseDto> {
    const newProvider = await this.providersService.createProvider(provider.providerName);

    return newProvider;
  }

}