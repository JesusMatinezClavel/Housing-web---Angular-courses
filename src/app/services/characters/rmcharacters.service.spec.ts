import { TestBed } from '@angular/core/testing';

import { RMCharactersService } from './rmcharacters.service';

describe('RMCharactersService', () => {
  let service: RMCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RMCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
