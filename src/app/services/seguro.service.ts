import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Seguro } from '../entitys/Seguro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  
  private url: string = "http://localhost:8090/apiv1/seguros";
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  crearSeguro(seguro: Seguro): Observable<Seguro> {
    return this.http.post<Seguro>(this.url, seguro, { headers: this.httpHeader});
  }
}
