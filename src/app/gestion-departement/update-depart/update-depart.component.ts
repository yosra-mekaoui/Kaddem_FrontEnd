import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';

@Component({
  selector: 'app-update-depart',
  templateUrl: './update-depart.component.html',
  styleUrls: ['./update-depart.component.css']
})
export class UpdateDepartComponent implements OnInit {
  myId=0;
  myDepart!:Departement;
  reactiveForm=this.fb.group(
    {
       idDepart:[''],
      nomDepart:['']
    }
  );
  constructor(private fb:FormBuilder,private actR: ActivatedRoute,private serviceDepar:ServiceDepartService,private R:Router) { }

  ngOnInit(): void {
     
    this.serviceDepar.getDepartById(this.actR.snapshot.params["idDepart"]).subscribe(data=>{
    this.myDepart=data;
  
     
    this.reactiveForm.patchValue({idDepart: this.myDepart.idDepart ,nomDepart:this.myDepart.nomDepart});
    console.log(this.myDepart.nomDepart)
   // this.reactiveForm.setValue({idDepart:this.myDepart.idDepart,nomDepart:this.myDepart.nomDepart})
   
  
  });
  }
  get idDepart(){
    return this.reactiveForm.get('idDepart')
  }
  get nomDepart(){
    return this.reactiveForm.get('nomDepart');
  
  }
update(){

  this.serviceDepar.UpdateDepart(this.myDepart.idDepart,this.reactiveForm.value).subscribe(data=>{

  this.R.navigate(['listDepar']);
  }
  )
  

}  
}
