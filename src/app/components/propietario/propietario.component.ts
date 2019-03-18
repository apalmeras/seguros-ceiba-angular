import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/entitys/Propietario';
import { PropietarioService } from 'src/app/services/propietario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietario: Propietario = new Propietario();

  constructor(private propietarioService: PropietarioService,
    private router:Router) { }

  ngOnInit() {

  }

  guardar() {
    this.propietarioService.crearPropietario(this.propietario).subscribe(
      respose => this.router.navigate(['/principal'])
    );
  }

  reiniciar() {
    this.propietario = new Propietario();
  }
}
