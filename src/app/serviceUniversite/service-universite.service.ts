import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../Models/Departement';
import { universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class ServiceUniversiteService {
  urlApi = 'http://localhost:8080/test/univer/all'; 
  urlDel='http://localhost:8080/test/univer/delete/' ;
  urlAdd='http://localhost:8080/test/univer/add' ;
  addwithimage='http://localhost:8080/test/univer/addWithImage';
  urlUpdate='http://localhost:8080/test/dep/updateDepar';
  urlgetmaxid='http://localhost:8080/test/univer/maxid';
  relation='http://localhost:8080/test/dep/assignUniversiteToDepartement/';
  listdepart='http://localhost:8080/test/univer/listdepart';
d:any;
  Universite=[];

  constructor(private http: HttpClient) { }

  getData():Observable<universite[]> {
    return this.http.get<universite[]>(this.urlApi);
}
  
AddUniv(u: universite):Observable<universite>{
//alert(this.getmaxid())
  return this.http.post<universite>(this.urlAdd,u)

 }
 getmaxid(){
return this.http.get<any>(this.urlgetmaxid);
 }
 relationdepart(idUniv:number,idDepart:number){
return this.http.put(this.relation+idUniv+"/"+idDepart,this.d);
 }

 addWithImage(u: FormData){
  return this.http.post<universite>(this.addwithimage,u);
 }
 delete(id:number){
   
  return  this.http.delete(this.urlDel+id)
      ;

} 
/*
 getData():Observable<universite[]> {
    return this.http.get<universite[]>(this.urlApi);
}
*/
listedepart():Observable<Departement[]>{
return this.http.get<Departement[]>(this.listdepart);
}
}
