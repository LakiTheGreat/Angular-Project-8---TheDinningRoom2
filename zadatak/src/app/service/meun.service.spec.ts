import { TestBed } from '@angular/core/testing';

import { MeunService } from './meun.service';

describe('MeunService', () => {
  let service: MeunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
