import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrorutascpvComponent } from './macrorutascpv.component';

describe('MacrorutascpvComponent', () => {
  let component: MacrorutascpvComponent;
  let fixture: ComponentFixture<MacrorutascpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacrorutascpvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrorutascpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
