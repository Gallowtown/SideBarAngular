import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalYearComponent } from './modal-year.component';

describe('ModalYearComponent', () => {
  let component: ModalYearComponent;
  let fixture: ComponentFixture<ModalYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
