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
  urlAdd='http://localhost:8080/test/dep/add' ;
  urlGetId='http://localhost:8080/test/dep/get/';
  urlUpdate='http://localhost:8080/test/dep/updateDepar';

  Universite=[];

  constructor(private http: HttpClient) { }

  getData():Observable<universite[]> {
    return this.http.get<universite[]>(this.urlApi);
}
 
}
