import { injectable, inject } from 'inversify';
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-koa-utils';
import * as Router from 'koa-router';
import SERVICE_IDENTIFIER from '../constant/identifiers';
import { TestService } from '../service/interfaces';
import { statusCode } from '../constant/http.status';
import { TestModel } from '../models/test/Test';

@controller('/test')
@injectable()
export class TestController implements interfaces.Controller {
  constructor(
    @inject(SERVICE_IDENTIFIER.TEST) private testService: TestService
  ) {}

  @httpGet('/get')
  get(): TestModel.GetResult {
    return this.testService.get();
  }

  @httpPost('/post')
  post(
    @requestBody() body: TestModel.PostBody,
    ctx: Router.RouterContext
  ): void {
    this.testService.post(body);
    ctx.status = statusCode.NoContent;
  }
}
