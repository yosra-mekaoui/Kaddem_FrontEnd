import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipeServicesService {

  constructor(private http :HttpClient) { }



postEquipe(data : any){
  return this.http.post<any>("http://localhost:3000/ListEquipe",data);

}



getEquipe(){
  return this.http.get<any>("http://localhost:3000/ListEquipe");

}


updateEquipe(data:any,id:number){

return this.http.put<any>("http://localhost:3000/ListEquipe/"+id,data)
}


deleteEquipe(id:number){
  return this.http.delete<any>("http://localhost:3000/ListEquipe/"+id)
}





}
