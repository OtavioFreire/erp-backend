import { Injectable, Logger } from '@nestjs/common';
import { ILoggerService } from '../domain/interfaces/logger-service.interface';

@Injectable()
export class LoggerService implements ILoggerService {
  private readonly logger = new Logger('AppLogger');

  log(moduleName: string, message: string) {
    this.logger.log(`${moduleName}: ${message}`);
  }

  error(moduleName: string, message: string, trace?: string) {
    this.logger.log(`${moduleName}: ${message} - ${trace}`);
  }

  warn(moduleName: string, message: string) {
    this.logger.log(`${moduleName}: ${message}`);
  }
}
