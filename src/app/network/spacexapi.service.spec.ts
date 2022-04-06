import { TestBed } from '@angular/core/testing';

import { LaunchService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: LaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchService);
  });

    it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
