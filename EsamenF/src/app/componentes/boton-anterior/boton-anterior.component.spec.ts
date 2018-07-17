import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAnteriorComponent } from './boton-anterior.component';

describe('BotonAnteriorComponent', () => {
  let component: BotonAnteriorComponent;
  let fixture: ComponentFixture<BotonAnteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonAnteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAnteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
