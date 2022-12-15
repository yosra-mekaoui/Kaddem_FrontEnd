import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../Models/Departement';
import { universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class ServiceUniversiteService {
  urlApi = 'http://localhost:8189/kaddem/univer/all'; 
  urlDel='http://localhost:8189/kaddem/univer/delete/' ;
  urlAdd='http://localhost:8189/kaddem/univer/add' ;
  addwithimage='http://localhost:8189/kaddem/univer/addWithImage';
  urlUpdate='http://localhost:8189/kaddem/univer/update';
  getbyid="http://localhost:8189/kaddem/univer/get/"
  urlgetmaxid='http://localhost:8189/kaddem/univer/maxid';
  relation='http://localhost:8189/kaddem/dep/assignUniversiteToDepartement/';
  listdepart='http://localhost:8189/kaddem/univer/listdepart';
  pagination='http://localhost:8189/kaddem/univer/all?pageNumber='
  getimage="http://localhost:8189/kaddem/univer/ListImagebyIduniv/";
  deleteImage="http://localhost:8189/kaddem/univer/deleteImage/";
d:any;
  Universite=[];

  constructor(private http: HttpClient) { }

  getData():Observable<universite[]> {
    return this.http.get<universite[]>(this.urlApi);
}
getWtithpagination(i :number){


  return this.http.get<universite[]>(this.pagination+i);
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
deleteImg(idUniv:number,idImage:number){
return this.http.put(this.deleteImage+idUniv+"/"+idImage,this.d);
}
 addWithImage(u: FormData){
  return this.http.post<universite>(this.addwithimage,u);
 }
 delete(id:number){
   
  return  this.http.delete(this.urlDel+id)
      ;

} 
 
listedepart():Observable<Departement[]>{
return this.http.get<Departement[]>(this.listdepart);
}
getDepartById(id:Number){
  return this.http.get<universite>(this.getbyid+id);
}
getImageById(id:Number){
  return this.http.get<any>(this.getimage+id);
}
UpdateDepart(id:number, d: Departement){
  
  return this.http.put<Departement>(this.urlUpdate,d);
  
 }
}
