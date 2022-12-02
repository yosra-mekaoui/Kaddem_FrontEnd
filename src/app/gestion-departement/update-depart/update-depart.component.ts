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
     // idDepart:['',[Validators.required]],
      nomDepart:['']
    }
  );
  constructor(private fb:FormBuilder,private actR: ActivatedRoute,private serviceDepar:ServiceDepartService,private R:Router) { }

  ngOnInit(): void {
    //this.newForm.controls.firstName.setValue('abc');
    //alert("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    //this.actR.paramMap.subscribe(data => this.myId = Number(data.get('param')));//fama lahdhhaa  kamell  lahdha barkaa dkida 
    //this.myId = this.actR.snapshot.params["idDepart"];
    //alert("mmmmmmmmmmmmmmmmmmmmmmmm"+this.myId);
    this.serviceDepar.getDepartById(this.actR.snapshot.params["idDepart"]).subscribe(data=>{
    this.myDepart=data;
  
    // affichii el data khater el data fehaa el getbyid wala mydapart belek ana ghalta fel api mtaa el get 
    this.reactiveForm.patchValue({nomDepart:this.myDepart.nomDepart});

   // this.reactiveForm.setValue({idDepart:this.myDepart.idDepart,nomDepart:this.myDepart.nomDepart})
   
 
 //this.reactiveForm.controls.
  });
  }
  get idDepart(){
    return this.reactiveForm.get('idDepart')
  }
  get nomDepart(){
    return this.reactiveForm.get('nomDepart');
  
  }
update(){
  this.serviceDepar.UpdateDepart(this.myDepart.idDepart,this.reactiveForm.value).subscribe(()=>
  alert('chose'))
  //this.R.navigate(['listDepar']))

}  
}
