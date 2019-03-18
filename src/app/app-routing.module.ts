import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/Principal/principal.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { ReclamacionComponent } from './components/reclamacion/reclamacion.component';
import { SeguroComponent } from './components/seguro/seguro.component';

const routes: Routes = [
  { path: '', redirectTo:'/principal', pathMatch: 'full'},
  { path: 'principal', component: PrincipalComponent },
  { path: 'propietario', component: PropietarioComponent },
  { path: 'inmueble', component: InmuebleComponent},
  { path: 'reclamacion', component: ReclamacionComponent },
  { path: 'seguro', component:SeguroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
