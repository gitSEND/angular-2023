import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  getMessageSlowly(): Promise<string> {
    let message = 'Hello World!';
    return new Promise(resolve => {
      // Delay by 3 second
      setTimeout(() => resolve(message), 3000);
    });
  }
}
