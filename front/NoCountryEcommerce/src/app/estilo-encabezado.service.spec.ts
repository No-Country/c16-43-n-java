import { TestBed } from '@angular/core/testing';

import { EstiloEncabezadoService } from './estilo-encabezado.service';

describe('EstiloEncabezadoService', () => {
  let service: EstiloEncabezadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstiloEncabezadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
