// Importación de módulos y clases necesarios
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

// Declaración del componente
@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css'],
})
export class InicioAdminComponent implements OnInit {
  constructor(
    private crudService: CrudService,
  ) {
  }


  ngOnInit(): void {
  }
}
