import { Departement } from "./Departement";
import { FileHandle } from "./file-handle.model";

export class universite{
  idUniv!:number;
    nomUniv!:string;
    departements!:Departement[];
    images!:FileHandle[];
}