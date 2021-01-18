import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incumplientos2Component } from './incumplientos2.component';

describe('Incumplientos2Component', () => {
  let component: Incumplientos2Component;
  let fixture: ComponentFixture<Incumplientos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Incumplientos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Incumplientos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
