import { Injectable } from '@angular/core';
import { Departement } from './Models/Departement';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceDepartService {
  urlApi = 'http://localhost:8080/test/dep/all'; 
  urlDel='http://localhost:8080/test/dep/remove/' 
  urlAdd='http://localhost:8080/test/dep/add' 
  urlGetId='http://localhost:8080/test/dep/get/'
  urlUpdate='http://localhost:8080/test/dep/updateDepar' // URL de l'API
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
 
 alert(d.nomDepart);
 return this.http.put<Departement>(this.urlUpdate,d);
 
}
getDepartById(id:Number){
  return this.http.get<Departement>(this.urlGetId+id);
}
}
