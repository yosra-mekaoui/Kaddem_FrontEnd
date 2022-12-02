import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EquipeServicesService } from '../services/equipe-services.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-equipe',
  templateUrl: './dialog-equipe.component.html',
  styleUrls: ['./dialog-equipe.component.css']
})
export class DialogEquipeComponent implements OnInit {

   ListNveau =["JUNIOR","SENIOR","EXPERT"]

   equipeForm !: FormGroup
   actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private equipeService:EquipeServicesService,
              @Inject(MAT_DIALOG_DATA) public editdata:any,
              private matdialoRef  :MatDialogRef<DialogEquipeComponent>) { }

  ngOnInit(): void {

    this.equipeForm=this.formBuilder.group({

      name :['',Validators.required ],
      niveau :['',Validators.required ],
      nombreMax :['',Validators.required ],
      email :['',Validators.required ],
      logo :['',Validators.required ],



  

    })


    console.log(this.editdata)
    
    if(this.editdata){
      this.actionButton="Modifier"
      this.equipeForm.controls['name'].setValue(this.editdata.name)
      this.equipeForm.controls['niveau'].setValue(this.editdata.niveau)
      this.equipeForm.controls['nombreMax'].setValue(this.editdata.nombreMax)
      this.equipeForm.controls['email'].setValue(this.editdata.email)
      this.equipeForm.controls['logo'].setValue(this.editdata.logo)
    }


  }





  addEquipe(){

    console.log(this.equipeForm.value)

    if(!this.editdata){
      if(this.equipeForm.valid){
        this.equipeService.postEquipe(this.equipeForm.value)
        .subscribe({
          next: (res)=>{
            alert("equipe ajoute avec succes");
            this.equipeForm.reset();
            this.matdialoRef.close("ajout");
          },
          error:()=>{
            alert("erreur d'ajout")
          }
  
  
        })
      }
    }else{
      this.updateEquipe()
    }

  }


  updateEquipe(){

    this.equipeService.updateEquipe(this.equipeForm.value,this.editdata.id)
    .subscribe({
      next:(r)=>{
        alert("equipe bien modifiée")
        this.equipeForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }



}

