import { Injectable } from '@angular/core';
import { Departement } from './Models/Departement';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceDepartService {
  urlApi = 'http://localhost:8189/kaddem/dep/all'; 
  urlDel='http://localhost:8189/kaddem/dep/remove/' 
  urlAdd='http://localhost:8189/kaddem/dep/add' 
  urlGetId='http://localhost:8189/kaddem/dep/get/'
  urlUpdate='http://localhost:8189/kaddem/dep/updateDepar' // URL de l'API
  Departement=[];
  constructor(private http: HttpClient) { }



  getData():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.urlApi);
}
 
delete(id:number){
   
  return  this.http.delete(this.urlDel+id)
      ;

} 
 
AddDepart(Departement: Departement):Observable<Departement>{
 return this.http.post<Departement>(this.urlAdd,Departement)
}
UpdateDepart(id:number, d: Departement){
  
 return this.http.put<Departement>(this.urlUpdate,d);
 
}
getDepartById(id:Number){
  return this.http.get<Departement>(this.urlGetId+id);
}
}
