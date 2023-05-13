import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCComponent } from './actualizar-c.component';

describe('ActualizarCComponent', () => {
  let component: ActualizarCComponent;
  let fixture: ComponentFixture<ActualizarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
