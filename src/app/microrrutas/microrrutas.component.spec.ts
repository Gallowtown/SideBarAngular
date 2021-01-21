import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrorrutasComponent } from './microrrutas.component';

describe('MicrorrutasComponent', () => {
  let component: MicrorrutasComponent;
  let fixture: ComponentFixture<MicrorrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrorrutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrorrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
