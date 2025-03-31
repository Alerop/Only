import { TestBed } from '@angular/core/testing';

import { OnlyPrototypeTService } from './only-prototype-t.service';

describe('OnlyPrototypeTService', () => {
  let service: OnlyPrototypeTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyPrototypeTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
