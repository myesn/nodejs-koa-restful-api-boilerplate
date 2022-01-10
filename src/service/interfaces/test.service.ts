import { TestGetResult } from '../../models/test/Test';

export interface TestPostBody {
  name: string;
}

export interface TestService {
  get(): TestGetResult;

  post(body: TestPostBody): void;
}
