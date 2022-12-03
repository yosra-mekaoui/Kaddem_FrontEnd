import {Specialite} from "./Specialite";

export class Contrat{
 public idContrat!: number;
  public dateDebutContrat!: Date;
  public dateFinContrat!: Date;
  public archive!: boolean;
  public montantContrat!: number;
  public specialite!: Specialite;

}