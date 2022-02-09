import {
  TestGetQuery,
  TestGetResult,
  TestPostBody,
} from '../../models/test/Test';

export interface TestService {
  get(query: TestGetQuery): TestGetResult;

  post(body: TestPostBody): void;
}
