import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarPersonaComponent } from './formulario-editar-persona.component';

describe('FormularioEditarPersonaComponent', () => {
  let component: FormularioEditarPersonaComponent;
  let fixture: ComponentFixture<FormularioEditarPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEditarPersonaComponent]
    });
    fixture = TestBed.createComponent(FormularioEditarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
