import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-formulario-registrar-persona',
  templateUrl: './formulario-registrar-persona.component.html',
  styleUrls: ['./formulario-registrar-persona.component.css']
})
export class FormularioRegistrarPersonaComponent {

  nuevaPersona = {
    Nombre: '',
    Apellido: '',
    FechaNacimiento: '',
  };

  constructor(private crudService: CrudService, private router: Router) {}

  registrar() {
    const camposNoVacios = Object.values(this.nuevaPersona).every(
      (campo) => !!campo
    );

    if (camposNoVacios) {
      this.crudService.crearPersona(this.nuevaPersona).subscribe(
        (res) => {
          this.nuevaPersona = {
            Nombre: '',
            Apellido: '',
            FechaNacimiento: '',
          };
          this.router.navigate(['/home/admin']);
          alertifyjs.success(res.message);
        },
        (error) => {
          // Manejar errores aquí
          console.error('Error en el registro', error.mensaje);
          alertifyjs.error(error.message);
        }
      );
    }

    if (!camposNoVacios) {
      alertifyjs.error('Ingrese todos los campos');
    }
  }


}
