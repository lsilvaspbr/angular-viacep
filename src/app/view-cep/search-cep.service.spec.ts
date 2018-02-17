import { TestBed, inject } from '@angular/core/testing';

import { SearchCepService } from './search-cep.service';

describe('SearchCepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCepService]
    });
  });

  it('should be created', inject([SearchCepService], (service: SearchCepService) => {
    expect(service).toBeTruthy();
  }));
});
