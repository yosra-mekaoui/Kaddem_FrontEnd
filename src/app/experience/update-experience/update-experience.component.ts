import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Experience } from 'src/app/Models/Experience';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceExperienceService } from 'src/app/service-experience.service';


@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {
  myId=0;
  myExper!:Experience;
  reactiveForm=this.fb.group(
    {
     // idDepart:['',[Validators.required]],
     titreDuProfil:[''],
     type:[''],
     dateDebutExperience:[''],
     dateFinExperience:[''],
     descriptif:[''],
     lieu:['']
    }
  );
  constructor(private fb:FormBuilder,private actR: ActivatedRoute,private serviceExper:ServiceExperienceService,private R:Router) { }

  ngOnInit(): void {
    this.serviceExper.getExperienceById(this.actR.snapshot.params["idExperience"]).subscribe(data=>{
      this.myExper=data;
    
      // affichii el data khater el data fehaa el getbyid wala mydapart belek ana ghalta fel api mtaa el get 
      this.reactiveForm.patchValue({titreDuProfil:this.myExper.titreDuProfil});
      this.reactiveForm.patchValue({type:this.myExper.type});
      this.reactiveForm.patchValue({dateDebutExperience:this.myExper.dateDebutExperience});
      this.reactiveForm.patchValue({dateFinExperience:this.myExper.dateFinExperience});
      this.reactiveForm.patchValue({descriptif:this.myExper.descriptif});
      this.reactiveForm.patchValue({lieu:this.myExper.lieu});

  
     
   
    });
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

  update(){
    this.serviceExper.UpdateExperience(this.myExper.idExperience,this.reactiveForm.value).subscribe(()=>
    alert('chose'))
    //this.R.navigate(['listDepar']))
  
  }  
  }