import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable()
export class DesktopService implements Computer {
  getComputerName() {
    return 'DESKTOP';
  }
}
