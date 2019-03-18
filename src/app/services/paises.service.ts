import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../Entitys/Pais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url: string = "http://localhost:8090/apiv1/paises";
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http:HttpClient) { }

  traerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url).pipe(
      map(response => response as Pais[])
    );
  }
}
