import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class ServiceUniversiteService {
  urlApi = 'http://localhost:8080/test/univer/all'; 
  urlDel='http://localhost:8080/test/dep/remove/' ;
  urlAdd='http://localhost:8080/test/univer/add' ;
  urlGetId='http://localhost:8080/test/dep/get/';
  urlUpdate='http://localhost:8080/test/dep/updateDepar';
  urlgetmaxid='http://localhost:8080/test/univer/maxid';
  relation='http://localhost:8080/test/dep/assignUniversiteToDepartement/'
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
}
