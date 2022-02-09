import { injectable } from 'inversify';
import { TestService } from 'src/service/interfaces';
import { TestGetQuery, TestGetResult, TestPostBody } from '../../../models/test/Test';

@injectable()
export class TestServiceImpl implements TestService {
  get(query: TestGetQuery): TestGetResult {
    return {
      data: `hi, ${query.name}`,
    };
  }

  post(body: TestPostBody): void {
    console.log('post: ', body);
  }
}
