import { Component, OnInit } from '@angular/core';
import {Contrat} from "../../Models/Contrat";
import {ContratService} from "../../../services/contrat.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Specialite} from "../../Models/Specialite";

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {
  reactiveForm = this.c.group({

  });
  contrat: Contrat = new Contrat();

  specialite =Specialite;
  constructor(private contratService: ContratService, private router: Router, private c :FormBuilder) {

  }

  ngOnInit(): void {

  }
  savecontrat(){
    this.contratService.createcontrat(this.contrat).subscribe( data =>{
        this.goTocontratList();
        alert("contrat added");
      },
      error => console.log(error));
  }
  goTocontratList(){
    this.router.navigate(['/contrat/listcontrat']);
  }

  onSubmit(){
    console.log(this.contrat);
    this.savecontrat();
  }

}
