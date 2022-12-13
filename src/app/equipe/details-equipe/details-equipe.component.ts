import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../models/Equipe';
import { DetailEquipe } from '../models/DetailEquipe';

import { EquipeServicesService } from '../services/equipe-services.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Location } from '@angular/common';

import { NgxQRCodeModule ,NgxQrcodeElementTypes} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-details-equipe',
  templateUrl: './details-equipe.component.html',
  styleUrls: ['./details-equipe.component.css']
})
export class DetailsEquipeComponent implements OnInit {

  idEquipe:any;

  equipe!:Equipe;
   detailsEquipe!:DetailEquipe;

   detailsForm!:FormGroup

   //patternNomEquipe="^[ a-zA-Z][a-zA-Z ]*$"; //pur nom equipe
   //Validators.minLength(3)

   //patternSalle



   title = 'app';
   value = 'Techiediaries';
   elementType = NgxQrcodeElementTypes.URL;
   color="red"


  constructor(private actRoute: ActivatedRoute,
              private equipeService: EquipeServicesService,
              private formBuilder : FormBuilder,
              private router :Router,
              private location: Location
    
    
    ) { }

  ngOnInit(): void {
     //this.idEquipe=this.actRoute.snapshot.paramMap.get('id'); 


     this.idEquipe=this.actRoute.snapshot.paramMap.get('id');

     


     this.equipeService.getEquipeById(this.idEquipe).subscribe(
     (res)=>{
      console.log('equipe :'+res.nomEquipe),
      this.equipe=res;


      if(this.equipe.detaileq !=null){
        console.log(this.equipe.detaileq.commentaire)
       }else{
        console.log("no details")
       }

       //this.value=this.equipe.nomEquipe;

       this.value="https://www.google.com/search?q="+this.equipe.nomEquipe;
     });




     this.detailsForm=this.formBuilder.group({

      salle :['',[Validators.required,
                  Validators.max(200),
                  Validators.min(1),
                  Validators.pattern("^[0-9]*$")
                ] ],

      thematique :['',[Validators.required,
                       Validators.pattern('[a-zA-Z ]*'),
                       Validators.minLength(3)] ],

      commentaire :['',[Validators.required,
                        Validators.minLength(10)] ],

    })

    
     /*
     this.equipeService.getDetalsEquipeBysalle().subscribe(
      (data)=>{
       console.log('details :'+data.id),
       this.detailsEquipe=data;
      })
      */

  }



  addDetailsEquipe(){
    console.log("detaisl>>>>> "+this.detailsForm.value)



    if(this.detailsForm.valid){
      this.equipeService.addDetailsToEquipe(this.detailsForm.value,this.equipe.idEquipe).subscribe({
        next: (res)=>{
          alert("Details equipe ajoute avec succes");
          this.detailsForm.reset();
         // this.router.navigate(["detailsequipe",this.equipe.idEquipe]);
          location.reload();

          
        },
        error:()=>{
          alert("erreur d'ajout Details equipe")
        }


      })
      

    }




  }

  deleteDetailsEquipe(idDetails:number){


  
    this.equipeService.deleteDetailsEquipe(idDetails)
    .subscribe({
      next: ()=>{
        alert("DetailsEquipe bien supprimer")
        this.router.navigateByUrl('/equipe/listequipe');



      },
      error:()=>{
        alert("erreur de suppression DetailsEquipe")
      }


    })
     




  }


  goToListeEquipe(){
    this.router.navigateByUrl('/equipe/listequipe');


  }








}