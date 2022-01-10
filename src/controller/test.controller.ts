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
import { testPostBody, testService } from '../service/interfaces';
import { statusCode } from '../constant/http.status';

@controller('/test')
@injectable()
export class testController implements interfaces.Controller {
  constructor(
    @inject(SERVICE_IDENTIFIER.TEST) private testService: testService
  ) {}

  @httpGet('/get')
  get(): string {
    return this.testService.get();
  }

  @httpPost('/post')
  post(@requestBody() body: testPostBody, ctx: Router.RouterContext): void {
    this.testService.post(body);
    ctx.status = statusCode.NoContent;
  }
}
