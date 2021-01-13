import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrRepresentanteComponent } from './cr-representante.component';

describe('CrRepresentanteComponent', () => {
  let component: CrRepresentanteComponent;
  let fixture: ComponentFixture<CrRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrRepresentanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
