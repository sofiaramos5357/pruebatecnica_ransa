import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CrudService {

  httpHeaders = new HttpHeaders().set('content-type', 'application/json');

  private apiUrl = 'http://localhost:8080/api';


  constructor(private httpClient: HttpClient) { }

  //-------------manejo de errores----
  handleError(error: HttpErrorResponse) {
    let errorMsg: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`;
    }
    return throwError(() => {
      errorMsg;
    });
  }
  //----------------------------------------------------------------


  getPersons(offset: number = 0, limit: number = 5, direction: 'next' | 'prev' = 'next'): Observable<any[]> {
    const url = `${this.apiUrl}/persona/all?offset=${offset}&limit=${limit}&direction=${direction}`;
    return this.httpClient.get<any[]>(url);
  }


  crearPersona(data: any) {
    return this.httpClient
      .post(`${this.apiUrl}/persona`, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError),
        map((response: any) => response)
      );
  }

  getPersona(Id: any) {
    return this.httpClient
      .get(`${this.apiUrl}/persona/${Id}`, { headers: this.httpHeaders })
      .pipe(
        map((res: any) => {
          return res || {};
        })
      );
  }

  modificarPersona(id: any, data: any) {
    return this.httpClient
      .put(`${this.apiUrl}/persona/${id}`, data, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError(this.handleError),
        map((response: any) => response)
      );
  }


}
