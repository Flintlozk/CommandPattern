import { TestBed } from '@angular/core/testing';

import { CommandControlService } from './command-control.service';

describe('CommandControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandControlService = TestBed.get(CommandControlService);
    expect(service).toBeTruthy();
  });
});
