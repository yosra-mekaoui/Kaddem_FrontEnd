import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { universite } from 'src/app/Models/Universite';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';
import { ServiceUniversiteService } from 'src/app/serviceUniversite/service-universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  list:any[]=[];
  selectedObject !:Departement;
  maxId!:number;
  u: universite =new universite();
  o:any;
  constructor(private serviceDepar:ServiceDepartService,private serviceUniv:ServiceUniversiteService,private R:Router,private fb:FormBuilder) { }
  reactiveForm=this.fb.group(
    {
       
      nomUniv:['',[Validators.required]],
      //departements: [],
    }
  );

  ngOnInit(): void {
    this.getListDepart();
    this.getmaxid();
  }
  getListDepart(){
    this.serviceDepar.getData().subscribe(
      data=>{this.list=data;
      //console.log(this.list);
    }
    )     
  }
   
  
Add(){
alert("add" +this.selectedObject.idDepart+"kkkkkkkkkkkkkk"+this.maxId);
 // alert( this.reactiveForm.value)
  this.serviceUniv.AddUniv(this.reactiveForm.value).subscribe(data =>{
  
  })
  
 
  this.serviceUniv.relationdepart(this.maxId+1,this.selectedObject.idDepart).subscribe(data=>{

  })
  this.R.navigate(['listUniv'])
}
getmaxid(){
  return this.serviceUniv.getmaxid().subscribe(
    data=>{
      this.maxId=data;
      console.log(this.maxId)
    }
  )
  ;
}
get nomUniv(){
  return this.reactiveForm.get('nomUniv')
}
 
}
