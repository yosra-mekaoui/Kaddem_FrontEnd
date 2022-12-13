import { Injectable } from '@angular/core';
import { Experience} from './Models/Experience';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceExperienceService {

  urlApi = 'http://localhost:8189/kaddem/Experience';  // URL de l'API
  urlUpdate='http://localhost:8189/kaddem/dep/update/' // URL de l'API

  constructor(private http: HttpClient ) {

   }

   getExperience(){
    return this.http.get<any>("http://localhost:8189/kaddem/Experience/getAllExperience");

  }
   /*getData(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.urlApi+"/getAllExperience"}`);
  }*/



  deleteExperience(id: number) : Observable<Experience[]>{
    return this.http.delete<[Experience]>(this.urlApi+"/remove/"+id);
  }



  postExperience(data : any){
    return this.http.post<any>("http://localhost:8189/kaddem/Experience/add",data);

  }
 /* addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(`${this.urlApi+"/add"}`,experience);
  }*/

  updateExperience(data:any,id:number){

    return this.http.put<any>("http://localhost:8189/kaddem/Experience/update/"+id,data)
    }
  /*UpdateExperience(id:number, experience: Experience){


    return this.http.put(`${this.urlApi+"/update/"+id}`,experience);
   }
*/
   getExperienceById(id:Number){
     return this.http.get<Experience>(this.urlApi+"/get/"+id);
   }

   exportPdfExperiences():Observable<Blob>{
    return this.http.get("http://localhost:8189/kaddem/Experience/export/pdf", {responseType: 'blob' });
   }
    exportExcelExperiences():Observable<Blob>{
    return this.http.get("http://localhost:8189/kaddem/Experience/export/excel", {responseType: 'blob' });
}
}
