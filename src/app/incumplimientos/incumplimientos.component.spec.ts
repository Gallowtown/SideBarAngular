import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncumplimientosComponent } from './incumplimientos.component';

describe('IncumplimientosComponent', () => {
  let component: IncumplimientosComponent;
  let fixture: ComponentFixture<IncumplimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncumplimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncumplimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
