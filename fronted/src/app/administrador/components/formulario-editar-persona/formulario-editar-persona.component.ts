import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-formulario-editar-persona',
  templateUrl: './formulario-editar-persona.component.html',
  styleUrls: ['./formulario-editar-persona.component.css']
})
export class FormularioEditarPersonaComponent {

  constructor(private route: ActivatedRoute, private crudService: CrudService, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
  }

  id: any; // Declarar la propiedad id


  persona = {
    Nombre: '',
    Apellido: '',
    FechaNacimiento: '',
  }

  guardar() {
    // Aquí deberías tener la lógica para preparar los datos que quieres enviar al servicio.
    const datosModificados = {
      Nombre: this.persona.Nombre,
      Apellido: this.persona.Apellido,
      FechaNacimiento: this.persona.FechaNacimiento,
    };

    // Llamada al servicio para modificar la persona.
    this.crudService.modificarPersona(this.id, datosModificados).subscribe(
      (response) => {
        console.log('Persona modificada con éxito', response);
        this.router.navigate(['/home/admin']);

        
        // Aquí puedes manejar cualquier lógica adicional después de la modificación.
      },
      (error) => {
        console.error('Error al modificar persona', error);
        // Manejo de errores.
      }
    );
  }
}
