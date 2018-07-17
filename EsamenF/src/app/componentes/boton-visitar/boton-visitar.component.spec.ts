import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonVisitarComponent } from './boton-visitar.component';

describe('BotonVisitarComponent', () => {
  let component: BotonVisitarComponent;
  let fixture: ComponentFixture<BotonVisitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonVisitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonVisitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
