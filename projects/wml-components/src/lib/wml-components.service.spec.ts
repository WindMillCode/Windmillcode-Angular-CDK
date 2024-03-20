import { TestBed } from '@angular/core/testing';

import { WmlComponentsService } from './wml-components.service';

describe('WmlComponentsService', () => {
  let service: WmlComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmlComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
