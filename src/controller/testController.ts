import { inject, injectable } from 'inversify';
import {
  controller,
  request,
  httpGet,
  httpPost,
  interfaces,
  queryParam,
  requestBody,
  requestParam,
} from 'inversify-koa-utils';
import * as Router from 'koa-router';
import SERVICE_IDENTIFIER from '../constant/identifiers';
import { TestService } from '../service/interfaces';
import { statusCode } from '../constant/httpStatusCode';
import { TestGetQuery, TestGetResult, TestPostBody } from '../models/test/Test';

@controller('/test')
@injectable()
export class TestController implements interfaces.Controller {
  constructor(
    @inject(SERVICE_IDENTIFIER.TEST) private testService: TestService
  ) {}

  @httpGet('/get')
  get(
    queryNoAnnotation1: TestGetQuery,
    @queryParam() queryQueryParam: TestGetQuery,
    @requestParam() queryRequestParam: TestGetQuery,
    @requestBody() queryRequestBody: TestGetQuery,
    @request() request: any,
    ctx: Router.RouterContext
  ): TestGetResult {
    return this.testService.get(queryQueryParam);
  }

  @httpPost('/post')
  post(@requestBody() body: TestPostBody, ctx: Router.RouterContext): void {
    this.testService.post(body);
    ctx.status = statusCode.NoContent;
  }
}
