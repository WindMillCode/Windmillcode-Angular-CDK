import { TestBed } from '@angular/core/testing';

import { WMLNotifyOneService } from './wml-notify-one.service';

describe('WMLNotifyOneService', () => {
  let service: WMLNotifyOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WMLNotifyOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
