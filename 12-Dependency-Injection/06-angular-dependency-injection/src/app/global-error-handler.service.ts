import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './services/logger.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: any) {
    const loggerService = this.injector.get(LoggerService);
    if (error instanceof HttpErrorResponse) {
      loggerService.log('Backend returned status code: ' + error.status);
      loggerService.log('Response body:' + error.message);
    } else {
      loggerService.log('An error occurred:' + error.message);
    }
  }
}
