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
  pdf(){
    this.ContratService.pdf().subscribe(data=>{
      const blob = new Blob([data], {type: 'application/pdf'});
      if(window.navigator &&   (window.navigator as any).msSaveOrOpenBlob){
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "contrat.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }
}
