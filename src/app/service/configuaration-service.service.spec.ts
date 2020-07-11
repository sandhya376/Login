import { TestBed } from '@angular/core/testing';

import { ConfiguarationServiceService } from './configuaration-service.service';

describe('ConfiguarationServiceService', () => {
  let service: ConfiguarationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguarationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
