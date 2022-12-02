import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Experience } from 'src/app/Models/Experience';
import { Router } from '@angular/router';
import { ServiceExperienceService } from 'src/app/service-experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
  providers: [ServiceExperienceService]
})
export class AddExperienceComponent implements OnInit {
Exper!:Experience[];
  constructor(private fb:FormBuilder,private serviceExper:ServiceExperienceService,private R:Router) { }

  ngOnInit(): void {
  }
  reactiveForm=this.fb.group(
    {
     // idDepart:['',[Validators.required]],
     titreDuProfil:['',[Validators.required]],
     type:['',[Validators.required]],
     dateDebutExperience:['',[Validators.required]],
     dateFinExperience:['',[Validators.required]],
     descriptif:['',[Validators.required]],
     lieu:['',[Validators.required]],
    }
  );
  Add(){
 
    this.serviceExper.addExperience(this.reactiveForm.value).subscribe(data =>{
     console.log("add");
     this.R.navigate(['listExperience'])
     
    })
   
   } 
   get idExperience(){
     return this.reactiveForm.get('idExperience')
   }
   get titreDuProfil(){
     return this.reactiveForm.get('titreDuProfil');
   
   }
   get type(){
    return this.reactiveForm.get('type');
  
  }
  get dateDebutExperience(){
    return this.reactiveForm.get('dateDebutExperience');
  
  }
  get dateFinExperience(){
    return this.reactiveForm.get('dateFinExperience');
  
  }
  get descriptif(){
    return this.reactiveForm.get('descriptif');
  
  }
  get lieu(){
    return this.reactiveForm.get('lieu');
  
  }
}
