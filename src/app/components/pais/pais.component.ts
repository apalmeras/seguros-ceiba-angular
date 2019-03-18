import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/Entitys/Pais';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.sass']
})
export class PaisComponent implements OnInit {
  paisSeleccionado:Pais = new Pais();

  paises:Pais[];

  constructor(private paisService:PaisesService) { }

  ngOnInit() {
    this.paisService.traerPaises().subscribe(
      response =>this.agregarPaises(response)
    );    
  }

  agregarPaises(paises:Pais[]){
    this.paises = paises;
    this.paisSeleccionado = this.paises[0];
  }

  onSeleccionarPais(pais: Pais){
    this.paisSeleccionado = pais;    
  }

}
