import { TestBed } from '@angular/core/testing';

import { CrearModificarService } from './crear-modificar.service';

describe('CrearModificarService', () => {
  let service: CrearModificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearModificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
