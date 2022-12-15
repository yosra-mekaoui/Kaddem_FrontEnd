import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'http';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  product:any[]=[]
list:any[]=[]
libelle:string="";

  constructor(private serviceDepar:ServiceDepartService,private R:Router) { }
  
  ngOnInit(): void {
    this.getListDepart();
   // alert(this.list);
   console.log(this.list)
  }
  getListDepart(){
    this.serviceDepar.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);
     
    }
    )
      
  }
  ngClassFunction(){
    
  }
  add(){
    this.R.navigate(['/listDepar/add'])
  }

  DeleteDepart(id:number)
  {
   
this.serviceDepar.delete(id).subscribe(
  data =>  {
  console.log(data);
this.getListDepart();
});} 


}
