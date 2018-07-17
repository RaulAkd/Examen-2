import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoUsuarioComponent } from './foto-usuario.component';

describe('FotoUsuarioComponent', () => {
  let component: FotoUsuarioComponent;
  let fixture: ComponentFixture<FotoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
