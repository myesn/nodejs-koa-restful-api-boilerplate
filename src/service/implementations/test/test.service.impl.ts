import { injectable } from 'inversify';
import { TestPostBody, TestService } from 'src/service/interfaces';
import { TestGetResult } from '../../../models/test/Test';

@injectable()
export class TestServiceImpl implements TestService {
  get(): TestGetResult {
    return {
      data: 'myesn',
    };
  }

  post(body: TestPostBody): void {
    console.log('post: ', body);
  }
}
