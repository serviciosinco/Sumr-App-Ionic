import { TestBed } from '@angular/core/testing';

import { PshProvider } from './psh';

describe('PshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PshProvider = TestBed.get(PshProvider);
    expect(service).toBeTruthy();
  });
});
