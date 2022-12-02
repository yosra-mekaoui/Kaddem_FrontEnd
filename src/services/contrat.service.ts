import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contrat} from "../app/Models/Contrat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private baseUrl = "http://localhost:8888/kaddem/contrat/all";
  constructor(private httpClient: HttpClient) { }
  getContrat(): Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}`);
  }
  deleteContrat(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8888/kaddem/contrat/remove/${id}`);
  }
  createcontrat(contrat:Contrat): Observable<Object>{
    return this.httpClient.post(`http://localhost:8888/kaddem/contrat/add`, contrat );
  }
  getcontratById(id: number): Observable<Contrat>{
    return this.httpClient.get<Contrat>(`http://localhost:8888/kaddem/contrat/get/${id}`);
  }

  updatecontrat(id: number, contrat :Contrat): Observable<Object>{
    return this.httpClient.put(`http://localhost:8888/kaddem/contrat/update`, contrat);
  }
}
