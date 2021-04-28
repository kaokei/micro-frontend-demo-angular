import { TestBed } from '@angular/core/testing';

import { PostBridgeService } from './post-bridge.service';

describe('RouterService', () => {
  let service: PostBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
