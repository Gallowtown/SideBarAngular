import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarmacrorutasComponent } from './generarmacrorutas.component';

describe('GenerarmacrorutasComponent', () => {
  let component: GenerarmacrorutasComponent;
  let fixture: ComponentFixture<GenerarmacrorutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarmacrorutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarmacrorutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
