import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrorutasComponent } from './macrorutas.component';

describe('MacrorutasComponent', () => {
  let component: MacrorutasComponent;
  let fixture: ComponentFixture<MacrorutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacrorutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrorutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
