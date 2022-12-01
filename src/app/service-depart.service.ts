import { Injectable } from '@angular/core';
import { Departement } from './Models/Departement';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceDepartService {
  urlApi = 'http://localhost:8080/test/dep/all'; 
  urlDel='http://localhost:8080/test/dep/remove/' // URL de l'API
  Departement=[];
  constructor(private http: HttpClient) { }



  getData():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.urlApi);
}

delete(id:number){
   
    this.http.delete(this.urlDel+id)
        .subscribe(() => console.log("Delete successful"));

}
}
