import { Inmueble } from './Inmueble';
import { Propietario } from './Propietario';
import { Pais } from './Pais';

export class Seguro{
    id:number;
    propietario: Propietario;
    inmueble: Inmueble;
    pais:Pais;
    fecha:string;
    valor:number;
}