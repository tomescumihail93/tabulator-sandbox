import { TestBed } from '@angular/core/testing';

import { TabulatorConfirmationService } from './tabulator-confirmation.service';

describe('TabulatorConfirmationService', () => {
  let service: TabulatorConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabulatorConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
