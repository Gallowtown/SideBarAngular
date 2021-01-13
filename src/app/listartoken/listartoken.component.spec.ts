import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartokenComponent } from './listartoken.component';

describe('ListartokenComponent', () => {
  let component: ListartokenComponent;
  let fixture: ComponentFixture<ListartokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
