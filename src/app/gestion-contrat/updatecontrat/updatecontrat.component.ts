import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ContratService} from "../../../services/contrat.service";
import {Contrat} from "../../Models/Contrat";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-updatecontrat',
  templateUrl: './updatecontrat.component.html',
  styleUrls: ['./updatecontrat.component.css']
})
export class UpdatecontratComponent implements OnInit {
  id!: number;
  c: Contrat = new Contrat();
  reactiveForm = this.contrat.group({
    dateDebutContrat: [''],
    dateFinContrat: [''],
    archive: [''],
    montantContrat: ['']


  });
  constructor(private contrat:FormBuilder,private contratService: ContratService ,private route: ActivatedRoute,
 ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => this.id = Number(data.get('param')));
    console.log(this.id);

    this.contratService.getcontratById(this.id).subscribe(data => {
      this.c = data;
      this.reactiveForm.setValue({
        dateDebutContrat: this.c.dateDebutContrat,
        dateFinContrat: this.c.dateFinContrat,
        archive: this.c.archive,
        montantContrat: this.c.montantContrat
      });
    }, error => console.log(error));


  }
  onSubmit(){
    this.contratService.updatecontrat(this.id, this.c).subscribe( data =>{
        console.log(data);
      }
      , error => console.log(error));
  }
}
