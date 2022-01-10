import { injectable, inject } from 'inversify';

import SERVICE_IDENTIFIER from '../../../constant/identifiers';
import { Weapon, Warrior } from '../../interfaces';

@injectable()
export class Samurai implements Warrior {
  public name: string;

  public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) public weapon: Weapon) {
    this.name = 'Samurai';
  }
}
