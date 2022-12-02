import { Injectable } from '@angular/core'; 
import { Etudiant } from 'src/app/Models/Etudiant';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

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
}
