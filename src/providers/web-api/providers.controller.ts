import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProvidersService } from "../application/providers.service";
import { ProviderResponseDto } from "../domain/dto/provider.response";
import { CreateProviderDto } from "../domain/dto/provider-create.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

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