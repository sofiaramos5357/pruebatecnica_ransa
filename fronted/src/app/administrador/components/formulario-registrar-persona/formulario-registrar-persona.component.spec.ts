import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistrarPersonaComponent } from './formulario-registrar-persona.component';

describe('FormularioRegistrarPersonaComponent', () => {
  let component: FormularioRegistrarPersonaComponent;
  let fixture: ComponentFixture<FormularioRegistrarPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRegistrarPersonaComponent]
    });
    fixture = TestBed.createComponent(FormularioRegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
