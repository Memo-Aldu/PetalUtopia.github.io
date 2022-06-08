import { TestBed } from '@angular/core/testing';

import { FlowerFilerServiceService } from './flower-filer-service.service';

describe('FlowerFilerServiceService', () => {
  let service: FlowerFilerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerFilerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
