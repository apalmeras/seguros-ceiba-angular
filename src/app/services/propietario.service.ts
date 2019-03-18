import { Injectable } from '@angular/core';
import { Propietario } from '../entitys/Propietario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private url: string = "http://localhost:8090/apiv1/propietarios";
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  traerPropietarios():Observable<Propietario[]>{
    return this.http.get<Propietario[]>(this.url).pipe(
      map(response => response as Propietario[])
    );
  }

  crearPropietario(propietario: Propietario): Observable<Propietario> {
    return this.http.post<Propietario>(this.url, propietario, { headers: this.httpHeader});
  }
}
