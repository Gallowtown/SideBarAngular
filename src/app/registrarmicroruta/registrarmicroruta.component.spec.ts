import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarmicrorutaComponent } from './registrarmicroruta.component';

describe('RegistrarmicrorutaComponent', () => {
  let component: RegistrarmicrorutaComponent;
  let fixture: ComponentFixture<RegistrarmicrorutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarmicrorutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarmicrorutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
