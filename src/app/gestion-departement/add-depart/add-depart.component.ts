import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.css']
})
export class AddDepartComponent implements OnInit {
 
  Depart!:Departement[];
  constructor(private fb:FormBuilder,private serviceDepar:ServiceDepartService,private R:Router) { }

  ngOnInit(): void {
  }
  reactiveForm=this.fb.group(
    {
     // idDepart:['',[Validators.required]],
      nomDepart:['',[Validators.required]]
    }
  );

Add(){
 
 this.serviceDepar.AddDepart(this.reactiveForm.value).subscribe(data =>{
  console.log("add");
  this.R.navigate(['listDepar'])
  
 })

} 
get idDepart(){
  return this.reactiveForm.get('idDepart')
}
get nomDepart(){
  return this.reactiveForm.get('nomDepart');

}

}
