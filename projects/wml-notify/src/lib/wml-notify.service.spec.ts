import { TestBed } from '@angular/core/testing';

import { WmlNotifyService } from './wml-notify.service';

describe('WmlNotifyService', () => {
  let service: WmlNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmlNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
