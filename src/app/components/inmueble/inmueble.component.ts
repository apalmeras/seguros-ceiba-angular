import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/entitys/Inmueble';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { Router } from '@angular/router';
import { TipoInmueble } from 'src/app/entitys/TipoInmueble';
import { ErrorHandler } from '@angular/router/src/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
  error: boolean;
  inmueble = new Inmueble();
  inmuebleResponse = new Inmueble();


  tipos: TipoInmueble[];

  constructor(private inmuebleService: InmuebleService,
    private router: Router) { }

  ngOnInit() {
    this.inmuebleService.traerTiposInmueble().subscribe(
      tipoInmueble => this.tipos = tipoInmueble
    );
  }

  guardar() {
    this.inmuebleService.crearInmueble(this.inmueble).subscribe(
      respose => this.router.navigate(['/principal']),
      error => this.error = true
      
    )


  }


  reiniciar() {
    this.inmueble = new Inmueble();
  }
}
