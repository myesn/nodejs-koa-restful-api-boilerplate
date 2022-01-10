/**
 * The reflect-metadata polyfill should be imported only once in your entire application
 * because the Reflect object is mean to be a global singleton.
 */
import 'reflect-metadata';

import { Container } from 'inversify';
import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';

import { Battle, Weapon, Warrior, testService } from '../service/interfaces';
import {
  EpicBattle,
  Katana,
  Shuriken,
  Ninja,
  Samurai,
} from '../service/implementations';

import SERVICE_IDENTIFIER from '../constant/identifiers';
import TAG from '../constant/tags';
import { testServiceImpl } from '../service/implementations/test/test.service.impl';
import { testController } from '../controller/test.controller';
import { Config, config } from './config';

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

container.bind<Config>(SERVICE_IDENTIFIER.CONFIG).toConstantValue(config);

container.bind<testService>(SERVICE_IDENTIFIER.TEST).to(testServiceImpl);
container.bind<interfaces.Controller>(TYPE.Controller).to(testController);

const server = new InversifyKoaServer(container, undefined, {
  rootPath: '/api',
});

export { container, server };
