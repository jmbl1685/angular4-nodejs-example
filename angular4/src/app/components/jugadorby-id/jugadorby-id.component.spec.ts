import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorbyIdComponent } from './jugadorby-id.component';

describe('JugadorbyIdComponent', () => {
  let component: JugadorbyIdComponent;
  let fixture: ComponentFixture<JugadorbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
