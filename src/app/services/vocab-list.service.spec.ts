import { TestBed } from '@angular/core/testing';

import { VocabListService } from './vocab-list.service';

describe('VocabListService', () => {
  let service: VocabListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
