/**
 * The reflect-metadata polyfill should be imported only once in your entire application
 * because the Reflect object is mean to be a global singleton.
 */
import 'reflect-metadata';

import { Container } from 'inversify';
import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';

import SERVICE_IDENTIFIER from '../constant/identifiers';
import TAG from '../constant/tags';
import { Battle, Weapon, Warrior, TestService } from '../service/interfaces';
import {
  EpicBattle,
  Katana,
  Shuriken,
  Ninja,
  Samurai,
  TestServiceImpl
} from '../service/implementations';
import { TestController } from '../controller/test.controller';
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

container.bind<TestService>(SERVICE_IDENTIFIER.TEST).to(TestServiceImpl);
container.bind<interfaces.Controller>(TYPE.Controller).to(TestController);

const server = new InversifyKoaServer(container, undefined, {
  rootPath: '/api',
});

export { container, server };
