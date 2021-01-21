import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFrecuenciaComponent } from './modal-frecuencia.component';

describe('ModalFrecuenciaComponent', () => {
  let component: ModalFrecuenciaComponent;
  let fixture: ComponentFixture<ModalFrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFrecuenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
