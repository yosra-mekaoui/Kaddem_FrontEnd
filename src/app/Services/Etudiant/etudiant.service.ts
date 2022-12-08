import { Injectable } from '@angular/core'; 
import { Etudiant } from 'src/app/Models/Etudiant';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";
import { Contrat } from 'src/app/Models/Contrat';
import { Equipe } from 'src/app/Models/Equipe';

@Injectable({
  providedIn: 'root'
  }
)
export class EtudiantService {
   
  constructor(private http : HttpClient) { }
  usersList: Etudiant[] = [];

  url = "http://localhost:8189/kaddem/etudiant/"; 
  
  getAllUsers() : Observable<Etudiant[]>{
    return this.http.get<[Etudiant]>(this.url+"all");
  }

  deleteUser(id: number) : Observable<Etudiant[]>{
    return this.http.delete<[Etudiant]>(this.url+"remove/"+id);
  }

  addEtudiant(e : Etudiant) : Observable<Etudiant[]>{
    return this.http.post<[Etudiant]>(this.url+"add",e);
  } 

  getEtudiantById(id:number) : Observable<Etudiant>{
    return this.http.get<Etudiant>(this.url+"get/"+id);
  }

  updateEtudiant(e : Etudiant){
    return this.http.put<Etudiant>(this.url+"update",e);
  }

  getContratsByEtudiant(id:number) : Observable<Contrat[]>{
    return this.http.get<[Contrat]>(this.url+"contratsByEtudiant/"+id);
  }
  
  getEquipesByEtudiant(id:number) : Observable<Equipe[]>{
    return this.http.get<[Equipe]>(this.url+"equipesByEtudiant/"+id);
  }

  getAllContrats(): Observable<Contrat[]>{ 
    return this.http.get<[Contrat]>("http://localhost:8189/kaddem/contrat/all");
  }

  assignContratToEtudiant(idContrat: number, idEtudiant : number){
    return this.http.put<Etudiant>("http://localhost:8189/kaddem/contrat/"+idContrat+"/"+idEtudiant, null);
  }
 
  getAllEquipes(): Observable<Equipe[]>{ 
    return this.http.get<[Equipe]>("http://localhost:8189/kaddem/equipe/all");
  }

  assignEquipeToEtudiant(idEquipe: number, idEtudiant : number){
    return this.http.put<Etudiant>("http://localhost:8189/kaddem/etudiant/assignEquipeToEtudiant/"+idEquipe+"/"+idEtudiant, null);
  }

  getTotalContratsAffectes() : Observable<number>{
    return this.http.get<number>(this.url+"totalContratsAffectes");
  }

  getTotalEquipesAffectes() : Observable<number>{
    return this.http.get<number>(this.url+"totalEquipesAffectes");
  }

  removeContratAffecte(idEtudiant: number, idContrat : number){
    return this.http.put<Etudiant>("http://localhost:8189/kaddem/etudiant/removeContratAffecte/"+idEtudiant+"/"+idContrat, null);
  }

  removeEquipeAffecte(idEtudiant: number, idEquipe : number){
    return this.http.put<Etudiant>("http://localhost:8189/kaddem/etudiant/removeEquipeAffecte/"+idEtudiant+"/"+idEquipe, null);
  }

  
}
