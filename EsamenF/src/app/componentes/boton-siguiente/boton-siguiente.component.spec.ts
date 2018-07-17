import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSiguienteComponent } from './boton-siguiente.component';

describe('BotonSiguienteComponent', () => {
  let component: BotonSiguienteComponent;
  let fixture: ComponentFixture<BotonSiguienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonSiguienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSiguienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
