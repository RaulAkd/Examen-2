import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTransferenciaComponent } from './boton-transferencia.component';

describe('BotonTransferenciaComponent', () => {
  let component: BotonTransferenciaComponent;
  let fixture: ComponentFixture<BotonTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
