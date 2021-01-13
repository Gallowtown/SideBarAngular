import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerartokenComponent } from './generartoken.component';

describe('GenerartokenComponent', () => {
  let component: GenerartokenComponent;
  let fixture: ComponentFixture<GenerartokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerartokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerartokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
