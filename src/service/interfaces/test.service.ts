export interface testPostBody {
  name: string;
}

export interface testService {
  get(): string;

  post(body: testPostBody): void;
}