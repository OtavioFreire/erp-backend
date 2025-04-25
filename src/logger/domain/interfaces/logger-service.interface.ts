
export interface ILoggerService {
  log(moduleName: string, message: string) 
  error(moduleName: string, message: string, trace?: string)
  warn(moduleName: string, message: string)
}

export const ILoggerService = 'ILoggerService';