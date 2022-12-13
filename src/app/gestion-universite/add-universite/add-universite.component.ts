import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { universite } from 'src/app/Models/Universite';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';
import { ServiceUniversiteService } from 'src/app/serviceUniversite/service-universite.service';
import { FileHandle } from 'src/app/Models/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  list:any[]=[];
  selectedObject !:Departement;
  theValue!:any;
  maxId!:number;
 
  u: universite =new universite();
  o:any;
 
  universite:universite={
    idUniv:0,
    nomUniv:"",
    departements:[],
    images:[]
}
   
  constructor(private serviceDepar:ServiceDepartService,private serviceUniv:ServiceUniversiteService,private R:Router,private fb:FormBuilder,private sanitizer:DomSanitizer) { }
  
  
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
    this.serviceUniv.listedepart().subscribe(
      data=>{this.list=data;
      //console.log(this.list);
    }
    )     
  }
  onFileSelected(event:any){
   console.log(event);
if(event.target.files){
  const file=event.target.files[0]; 
  const FileHandle:FileHandle={
    file: file,
    url:this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )
  }
this.universite.images.push(FileHandle);
alert(this.universite.images)
}
  }
  // add with image
   
  Add(){
    
    const c=this.prepareFormData(this.universite)
  
    this.serviceUniv.addWithImage(c).subscribe( data=>{
      this.serviceUniv.relationdepart(this.maxId+1,this.selectedObject.idDepart).subscribe();}
    );
   
    this.R.navigate(['listUniv'])
  }
    
prepareFormData(univer:universite):FormData{
  const formData=new FormData();
    formData.append(
      'universite',new Blob([JSON.stringify(univer)],{type:'application/json'})
    );
     for(let i=0;i<univer.images.length;i++) {
      formData.append(
        'imageFile',
        univer.images[i].file,
        univer.images[i].file.name
      );
     }
     return formData;
}
removeImage(i:number){
this.universite.images.splice(i,1);
}
    // add without image 
    /*
Add(){
//alert("add" +this.selectedObject.idDepart+"kkkkkkkkkkkkkk"+this.maxId);


 
  this.serviceUniv.AddUniv(this.universite).subscribe(data =>{
  
  })
  
 
  this.serviceUniv.relationdepart(this.maxId+1,this.selectedObject.idDepart).subscribe(data=>{

  })
  this.R.navigate(['listUniv'])
} */
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
numSequence(n: number): Array<number> {
  return Array(n);
}
 
}
