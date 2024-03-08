import { TestBed } from '@angular/core/testing';

import { AdministrarProductosService } from './administrar-productos.service';

describe('AdministrarProductosService', () => {
  let service: AdministrarProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrarProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
