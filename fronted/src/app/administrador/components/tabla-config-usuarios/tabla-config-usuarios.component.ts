import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import * as alertifyjs from 'alertifyjs';

import { Persona } from 'src/app/models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-config-usuarios',
  templateUrl: './tabla-config-usuarios.component.html',
  styleUrls: ['./tabla-config-usuarios.component.css'],
})
export class TablaConfigUsuariosComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  modalDocumentacion: any = {}; // Objeto para almacenar la información del modal
  documentacionArray: any = {}; // Array para almacenar la información de los documentos

  ngOnInit(): void {
    this.loadPersons();
    this.mensajeAlmacenado(); // Verifica si hay mensajes almacenados en el almacenamiento local y los muestra

  }

  mensajeAlmacenado() {
    // Esta función verifica si hay un mensaje almacenado en el almacenamiento local y lo muestra mediante una notificación.
    const mensaje = localStorage.getItem('mensaje');
    if (mensaje) {
      // Mostrar el mensaje con alertify o cualquier otro mecanismo de notificación
      alertifyjs.success(mensaje);

      // Limpiar el mensaje del almacenamiento local
      localStorage.removeItem('mensaje');
    }
  }

  loadPersons(direction: 'next' | 'prev' = 'next'): void {
    this.crudService.getPersons(this.offset, this.limit, direction)
      .subscribe(data => {
        this.personas = data;
      });
  }

  personas: Persona[] = [];
  offset = 0;
  limit = 5;

  loadMore(): void {
    const prevOffset = this.offset;
    this.offset += this.limit;

    this.crudService.getPersons(this.offset, this.limit, 'next')
      .subscribe(newPersons => {
        if (newPersons.length > 0) {
          this.personas = newPersons;
        } else {
          // Si no hay nuevos resultados, retrocede al offset anterior
          this.offset = prevOffset;
        }
      });
  }

  loadPrevious(): void {
    this.offset = Math.max(this.offset - this.limit, 0);

    this.crudService.getPersons(this.offset, this.limit, 'prev')
      .subscribe(newPersons => {
        if (newPersons.length > 0) {
          this.personas = newPersons;
        } else {
          // Si no hay nuevos resultados, retrocede al offset anterior
          this.offset = Math.max(this.offset - this.limit, 0);
        }
      });
  }

  persona: Persona[] = [];
  idPersona: number;


  documento = {
    idPersona: '',
    tipo: '',
    numero: ''
  };

  getPersonaId(id) {
    this.idPersona = id
  }

  idEditar(id) {
    this.router.navigate(['/editarpersona', id]);
  }

  guardarCambios() {
    // Verifica que el tipo y número de documento no estén vacíos
    if (this.documento.tipo && this.documento.numero) {
      // Recupera los documentos existentes del localStorage
      let documentosGuardados = JSON.parse(localStorage.getItem('documentos')) || [];

      // Agrega el nuevo documento al array con su ID
      documentosGuardados.push({
        idPersona: this.idPersona,
        tipo: this.documento.tipo,
        numero: this.documento.numero
      });

      // Guarda la lista actualizada en el localStorage
      localStorage.setItem('documentos', JSON.stringify(documentosGuardados));

      // Limpia los campos del documento
      this.documento.idPersona = '';
      this.documento.tipo = '';
      this.documento.numero = '';

      localStorage.setItem('mensaje', 'Datos guardados');
      window.location.reload();

    }
  }


}

