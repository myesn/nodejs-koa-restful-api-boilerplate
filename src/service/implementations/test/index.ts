import { injectable } from 'inversify';
import { TestService } from 'src/service/interfaces';
import { TestModel } from '../../../models/test/Test';

@injectable()
export class TestServiceImpl implements TestService {
  get(): TestModel.GetResult {
    return {
      data: 'myesn',
    };
  }

  post(body: TestModel.PostBody): void {
    console.log('post: ', body);
  }
}
