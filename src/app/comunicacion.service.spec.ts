import { TestBed } from '@angular/core/testing';

import { ComunicacionService } from './comunicacion.service';

describe('ComunicacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicacionService = TestBed.get(ComunicacionService);
    expect(service).toBeTruthy();
  });
});
