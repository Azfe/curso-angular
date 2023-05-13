import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalizadoCComponent } from './error-personalizado-c.component';

describe('ErrorPersonalizadoCComponent', () => {
  let component: ErrorPersonalizadoCComponent;
  let fixture: ComponentFixture<ErrorPersonalizadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPersonalizadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPersonalizadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
