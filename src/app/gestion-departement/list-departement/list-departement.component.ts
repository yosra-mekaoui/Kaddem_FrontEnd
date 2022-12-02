import { Component, OnInit } from '@angular/core';
import { Agent } from 'http';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
list:Departement[]=[]
  constructor(private serviceDepar:ServiceDepartService) { }

  ngOnInit(): void {
    this.getListDepart();
  }
  getListDepart(){
    this.serviceDepar.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);
    
    }
    )
      
  }
  DeleteDepart(id:number)
  {
   
this.serviceDepar.delete(id).subscribe(
  data =>  {
  console.log(data);
this.getListDepart();
});} 


}
