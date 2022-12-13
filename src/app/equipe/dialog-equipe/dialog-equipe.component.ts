import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EquipeServicesService } from '../services/equipe-services.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipe } from '../models/Equipe';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-dialog-equipe',
  templateUrl: './dialog-equipe.component.html',
  styleUrls: ['./dialog-equipe.component.css']
})
export class DialogEquipeComponent implements OnInit {

  equipenew!: Equipe;


   ListNveau =["JUNIOR","SENIOR","EXPERT"]

   equipeForm !: FormGroup
   actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private equipeService:EquipeServicesService,
              @Inject(MAT_DIALOG_DATA) public editdata:any,
              private matdialoRef  :MatDialogRef<DialogEquipeComponent>,private http: HttpService) { }



    taswira! : string;

  ngOnInit(): void {


    this.equipenew =  new Equipe();





    this.equipeForm=this.formBuilder.group({

      nomEquipe :['',[Validators.required,
                      Validators.pattern('[a-zA-Z ]*'),
                      Validators.minLength(3)] ],

      niveau :['',Validators.required ],

      nbrDesMembresMax :['',[Validators.required,
                             Validators.max(20),
                             Validators.min(2),
                             Validators.pattern("^[0-9]*$")] ],



      mail :['',[Validators.required,
                 Validators.email
                                
           ] ],






      logo :['',Validators.required ],



  

    })


    console.log(this.editdata)
    
    if(this.editdata){
      this.actionButton="Modifier"
      this.equipeForm.controls['nomEquipe'].setValue(this.editdata.nomEquipe)
      this.equipeForm.controls['niveau'].setValue(this.editdata.niveau)
      this.equipeForm.controls['nbrDesMembresMax'].setValue(this.editdata.nbrDesMembresMax)
      this.equipeForm.controls['mail'].setValue(this.editdata.mail)
      this.equipeForm.controls['logo'].setValue(this.editdata.logo)
    }


  }





  addEquipe(){

    console.log(this.equipeForm.value)

    if(!this.editdata){
      if(this.equipeForm.valid){


       console.log("ggggg"+this.equipeForm.controls['mail'].value);


       // this.equipeForm..="fffffffff";



      // this.equipeForm.controls['logo'].value="ddddddd";

     // this.equipeForm.controls['logo'].setValue("kkkkkkkkkkk")


        this.equipeService.postEquipe(this.equipeForm.value)
        .subscribe({
          next: (res)=>{
            alert("equipe ajoute avec succes");
            this.matdialoRef.close("ajout");


/*--------------------send email--------------------------*/
let maile=this.equipeForm.controls['mail'].value;
console.log(">>>>>>>> "+maile);


 let user = {
  name: "bbbbb",
  email: this.equipeForm.controls['mail'].value,
  sujet: "Bienvnu , Une equipe ete crée par cette email",
  html : "Bienvnu , Une equipe ete crée par cette email"
}
this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
  data => {
    let res:any = data; 
    console.log(
      `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
    );
  },

);

 /*-----------------//---send email--------------------------*/
      this.equipeForm.reset();



   

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

    this.equipeService.updateEquipe(this.equipeForm.value,this.editdata.idEquipe)
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

