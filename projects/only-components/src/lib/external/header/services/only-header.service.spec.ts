import { TestBed } from '@angular/core/testing';

import { OnlyHeaderService } from './only-header.service';

describe('OnlyHeaderService', () => {
  let service: OnlyHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
