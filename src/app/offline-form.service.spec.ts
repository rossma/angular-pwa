import { TestBed, inject } from '@angular/core/testing';

import { OfflineFormService } from './offline-form.service';

describe('OfflineFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineFormService]
    });
  });

  it('should be created', inject([OfflineFormService], (service: OfflineFormService) => {
    expect(service).toBeTruthy();
  }));
});
