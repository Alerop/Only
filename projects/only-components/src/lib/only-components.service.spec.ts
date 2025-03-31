import { TestBed } from '@angular/core/testing';

import { OnlyComponentsService } from './only-components.service';

describe('OnlyComponentsService', () => {
  let service: OnlyComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
