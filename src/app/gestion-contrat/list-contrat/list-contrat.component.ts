import { Component, OnInit } from '@angular/core';
import {Contrat} from "../../Models/Contrat";
import {Router} from "@angular/router";
import {ContratService} from "../../../services/contrat.service";

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  constructor(private ContratService: ContratService ,private router :Router) { }
  listcontrat: Contrat[]=[];
  ngOnInit(): void {


this.getContrat();
  }
  private getContrat(){
    this.ContratService.getContrat().subscribe(data => {
      console.log(data);
      this.listcontrat = data;


    });

  }
  deletecontrat(id: number){
    this.ContratService.deleteContrat(id).subscribe( data => {
      console.log(data);
      this.getContrat();
    })
  }
}
