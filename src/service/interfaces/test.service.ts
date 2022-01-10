import { TestModel } from '../../models/test/Test';

export interface TestService {
  get(): TestModel.GetResult;

  post(body: TestModel.PostBody): void;
}
