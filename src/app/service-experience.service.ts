import { Injectable } from '@angular/core';
import { Experience} from './Models/Experience';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceExperienceService {

  urlApi = 'http://localhost:8080/test/Experience';  // URL de l'API
  urlUpdate='http://localhost:8080/test/dep/update/' // URL de l'API

  constructor(private http: HttpClient ) {
    
   }
   getData(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.urlApi+"/getAllExperience"}`);
  }
 
  deleteExperience(id: number) : Observable<Experience[]>{
    return this.http.delete<[Experience]>(this.urlApi+"/remove/"+id);
  }
  addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(`${this.urlApi+"/add"}`,experience);
  }
  UpdateExperience(id:number, experience: Experience){
    
    
    return this.http.put(`${this.urlApi+"/update/"+id}`,experience);
   }
   /*UpdateExperience(id:number, experience: Experience){
    // const id = Number(d.idDepart);
    
    return this.http.put(this.urlUpdate+id,experience);
   }*/
   getExperienceById(id:Number){
     return this.http.get<Experience>(this.urlApi+"/get/"+id);
   }
      
}