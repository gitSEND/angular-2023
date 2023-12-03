import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable()
export class CowService extends AnimalService {
  override name = 'Cow';
  override food = 'Grass';
}
