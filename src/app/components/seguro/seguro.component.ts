import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/entitys/Seguro';
import { Propietario } from 'src/app/entitys/Propietario';
import { PropietarioService } from 'src/app/services/propietario.service';
import { Inmueble } from 'src/app/entitys/Inmueble';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { SeguroService } from 'src/app/services/seguro.service';
import { Router } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/Entitys/Pais';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {

  seguro:Seguro = new Seguro();
  propietarios:Propietario[];
  inmuebles:Inmueble[];

  pais:Pais;

  constructor(private servicePropietarios: PropietarioService, 
    private serviceInmueble: InmuebleService, 
    private servicePais: PaisesService,
    private serviceSeguro: SeguroService, private router:Router) { }

  ngOnInit() {
    //Trae Propietarios
    this.servicePropietarios.traerPropietarios().subscribe(
      data => this.propietarios = data
    );

    //Traer inmuebles
    this.serviceInmueble.traerInmuebles().subscribe(
      data => this.inmuebles = data
    )

    this.servicePais.traerPaises().subscribe(
      data => this.entregarPais(data)
    )
  }

  entregarPais(paises:Pais[]){
    this.pais = paises[0];
  }

  //Guardar
  guardar(){
    this.seguro.pais = this.pais;
    this.serviceSeguro.crearSeguro(this.seguro).subscribe(
      respose => this.router.navigate(['/principal'])
    );
  }

  limpiar(){
    this.seguro = new Seguro();
  }
}
