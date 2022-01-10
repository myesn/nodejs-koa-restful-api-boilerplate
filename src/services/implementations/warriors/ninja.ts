import { injectable, inject } from 'inversify';

import SERVICE_IDENTIFIER from '../../../constants/identifiers';
import { Warrior, Weapon } from '../../interfaces';

@injectable()
export class Ninja implements Warrior {
  public name: string;

  public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) public weapon: Weapon) {
    this.name = 'Ninja';
  }
}
