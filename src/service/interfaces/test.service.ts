import { TestGetResult, TestPostBody } from '../../models/test/Test';

export interface TestService {
  get(): TestGetResult;

  post(body: TestPostBody): void;
}
