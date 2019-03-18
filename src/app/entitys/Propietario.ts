import { Usuario } from './Usuario';

export class Propietario{
    id:number;
    nombre:string;
    cedula:string;

    usuario:Usuario = new Usuario();
}