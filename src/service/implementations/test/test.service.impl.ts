import { injectable } from 'inversify';
import { testPostBody, testService } from 'src/service/interfaces';

@injectable()
export class testServiceImpl implements testService{
  get(): string {
    return 'hi:koa';
  }

  post(body: testPostBody): void {
    console.log('post: ',body);
  }
}