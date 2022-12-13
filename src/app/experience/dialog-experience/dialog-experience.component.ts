import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceExperienceService } from 'src/app/service-experience.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-experience',
  templateUrl: './dialog-experience.component.html',
  styleUrls: ['./dialog-experience.component.css']
})
export class DialogExperienceComponent implements OnInit {
  experienceForm !: FormGroup
  actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private experienceService:ServiceExperienceService,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
    private matdialoRef  :MatDialogRef<DialogExperienceComponent>) { }

  ngOnInit(): void {
    this.experienceForm=this.formBuilder.group({

      titreDuProfil :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)
      ]],

      type :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],

      dateDebutExperience :['',Validators.required ],
      dateFinExperience :['',Validators.required ],

      descriptif :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],

      lieu :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],





    })




    console.log(this.editdata)

    if(this.editdata){
      this.actionButton="Modifier"
      this.experienceForm.controls['titreDuProfil'].setValue(this.editdata.titreDuProfil)
      this.experienceForm.controls['type'].setValue(this.editdata.type)
      this.experienceForm.controls['dateDebutExperience'].setValue(this.editdata.dateDebutExperience)
      this.experienceForm.controls['dateFinExperience'].setValue(this.editdata.dateFinExperience)
      this.experienceForm.controls['descriptif'].setValue(this.editdata.descriptif)
      this.experienceForm.controls['lieu'].setValue(this.editdata.lieu)

    }


  }





  addExperience(){

    console.log(this.experienceForm.value)

    if(!this.editdata){
      if(this.experienceForm.valid){
        this.experienceService.postExperience(this.experienceForm.value)
        .subscribe({
          next: (res)=>{
            alert("experience ajoute avec succes");
            this.experienceForm.reset();
            this.matdialoRef.close("ajout");
          },
          error:()=>{
            alert("erreur d'ajout")
          }


        })
      }
    }else{
      this.updateExperience()
    }

  }


  updateExperience(){

    this.experienceService.updateExperience(this.experienceForm.value,this.editdata.idExperience)
    .subscribe({
      next:(r)=>{
        alert("experience bien modifiée")
        this.experienceForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }



}

