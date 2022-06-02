import { TestBed } from '@angular/core/testing';

import { PageDataService } from './page-data.service';

describe('PageStateService', () => {
  let service: PageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
