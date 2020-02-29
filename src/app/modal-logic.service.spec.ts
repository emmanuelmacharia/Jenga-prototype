import { TestBed } from '@angular/core/testing';

import { ModalLogicService } from './modal-logic.service';

describe('ModalLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalLogicService = TestBed.get(ModalLogicService);
    expect(service).toBeTruthy();
  });
});
