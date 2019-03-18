import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Inmueble } from '../entitys/Inmueble';
import { Observable } from 'rxjs';
import { TipoInmueble } from '../entitys/TipoInmueble';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  private url: string = "http://localhost:8090/apiv1/";
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  crearInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this.http.post<Inmueble>(this.url + "inmuebles", inmueble, { headers: this.httpHeader});
  }

  traerTiposInmueble():Observable<TipoInmueble[]>{
    return this.http.get(this.url + "tipoInmueble").pipe(
      map(response => response as TipoInmueble[])
    );
  }

  traerInmuebles():Observable<Inmueble[]>{
    return this.http.get<Inmueble[]>(this.url + "inmuebles").pipe(
      map(response => response as Inmueble[])
    )
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message);
  }
}
