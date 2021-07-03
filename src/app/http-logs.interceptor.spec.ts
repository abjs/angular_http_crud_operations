import { TestBed } from '@angular/core/testing';

import { HttpLogsInterceptor } from './http-logs.interceptor';

describe('HttpLogsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpLogsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpLogsInterceptor = TestBed.inject(HttpLogsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
