/**
 * The reflect-metadata polyfill should be imported only once in your entire application
 * because the Reflect object is mean to be a global singleton.
 */
import 'reflect-metadata';

import { Container } from 'inversify';

import { Battle, Weapon, Warrior } from '../services/interfaces';
import {
  EpicBattle,
  Katana,
  Shuriken,
  Ninja,
  Samurai,
} from '../services/implementations';

import SERVICE_IDENTIFIER from '../constants/identifiers';
import TAG from '../constants/tags';

const container = new Container();

container
  .bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR)
  .to(Ninja)
  .whenTargetNamed(TAG.CHINESE);
container
  .bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR)
  .to(Samurai)
  .whenTargetNamed(TAG.JAPANESE);
container
  .bind<Weapon>(SERVICE_IDENTIFIER.WEAPON)
  .to(Shuriken)
  .whenParentNamed(TAG.CHINESE);
container
  .bind<Weapon>(SERVICE_IDENTIFIER.WEAPON)
  .to(Katana)
  .whenParentNamed(TAG.JAPANESE);
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default container;
