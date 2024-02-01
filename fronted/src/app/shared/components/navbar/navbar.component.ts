import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import {CrudService} from 'src/app/services/crud.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService, // Inyecta el servicio de autenticación
    private router: Router,// Inyecta el servicio de enrutamiento
    private crudService: CrudService
    ) {}


  ngOnInit(): void {
  }



  // Recarga la página si la ruta actual coincide con la ruta proporcionada
  reloadPageIfCurrentRoute(route: string) {
    if (this.router.url === route) {
      window.location.reload();
    }
  }


}
