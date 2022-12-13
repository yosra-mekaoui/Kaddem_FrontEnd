import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ContratService} from "../../../services/contrat.service";
import {Contrat} from "../../Models/Contrat";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Specialite} from "../../Models/Specialite";

@Component({
  selector: 'app-updatecontrat',
  templateUrl: './updatecontrat.component.html',
  styleUrls: ['./updatecontrat.component.css']
})
export class UpdatecontratComponent implements OnInit {
  id!: number;
  specialite =Specialite;
  contrat: Contrat = new Contrat();
  constructor(private contratService: ContratService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idContrat'];

    this.contratService.getcontratById(this.id).subscribe(data => {
      this.contrat = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.contratService.updatecontrat(this.id,this.contrat).subscribe( data =>{
        this.goTocontratList();
      }
      , error => console.log(error));
  }

  goTocontratList(){
    this.router.navigate(['/contrat/listContrat']);
  }
}
