import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable()
export class LaptopService implements Computer {
  getComputerName() {
    return 'LAPTOP';
  }
}
