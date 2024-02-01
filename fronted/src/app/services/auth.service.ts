import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //al momento de subir el servidor poner la direccion ip de donde estara alojado el backend
  private URL = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient, private router: Router) {}

  signUp(usuario) {
    return this.http.post<any>(this.URL + `/login`, usuario);
  }

  //para saber si el token existe o fue modificado
  loggedIn() {
    //si existe devolvera un true si no un false
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  //para cerrar sesion
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  

  //-------------------------enviar contrasena------------------------
  enviarContrasena(usuario) {
    return this.http.post<any>(this.URL + `/recuperarcontrasena`, usuario);
  }
}
