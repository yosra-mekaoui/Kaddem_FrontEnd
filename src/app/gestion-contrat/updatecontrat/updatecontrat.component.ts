import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ContratService} from "../../../services/contrat.service";
import {Contrat} from "../../Models/Contrat";
import {ActivatedRoute, Route} from "@angular/router";
import {Specialite} from "../../Models/Specialite";

@Component({
  selector: 'app-updatecontrat',
  templateUrl: './updatecontrat.component.html',
  styleUrls: ['./updatecontrat.component.css']
})
export class UpdatecontratComponent implements OnInit {
  id=0;
  c!: Contrat;
  specialite =Specialite;
  reactiveForm = this.contrat.group({

    idContrat: [''],
    dateDebutContrat: [''],
    dateFinContrat: [''],
    archive: [''],
    montantContrat: [''],
    specialite: ['']


  });
  constructor(private contrat:FormBuilder,private contratService: ContratService ,private route: ActivatedRoute,
 ) { }

  ngOnInit(): void {
this.contratService.getcontratById(this.route.snapshot.params['idContrat']).subscribe(data => {
this.c=data;

    this.reactiveForm.patchValue({
      idContrat: this.c.idContrat,
      dateDebutContrat: this.c.dateDebutContrat,
      dateFinContrat: this.c.dateFinContrat,
      archive: this.c.archive,
      montantContrat: this.c.montantContrat,
      specialite: this.c.specialite
    });


});

  }
  get idContrat(){
    return this.reactiveForm.get('idContrat')
  }
  get dateDebutContrat() {
    return this.reactiveForm.get('dateDebutContrat')
  }
  get dateFinContrat() {
    return this.reactiveForm.get('dateFinContrat')
  }
  get archive() {
    return this.reactiveForm.get('archive')
  }
  get montantContrat() {
    return this.reactiveForm.get('montantContrat')
  }


  onSubmit(){

    this.contratService.updatecontrat(this.c.idContrat, this.reactiveForm.value).subscribe( data =>{
        console.log(data);
      }
      , error => console.log(error));
  }

}
