import {Specialite} from "./Specialite";
import {Etudiant} from "./Etudiant";

export class Contrat{
 public idContrat!: number;
  public dateDebutContrat!: Date;
  public dateFinContrat!: Date;
  public archive!: boolean;
  public montantContrat!: number;
  public specialite!: Specialite;
  public  etudiant!: Etudiant;



}
