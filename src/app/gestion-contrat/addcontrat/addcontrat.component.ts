import { Component, OnInit } from '@angular/core';
import {Contrat} from "../../Models/Contrat";
import {ContratService} from "../../../services/contrat.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Specialite} from "../../Models/Specialite";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {
  reactiveForm = this.c.group({
    dateDebutContrat:['', [Validators.required]],
    dateFinContrat:['', [Validators.required]],
    archive:['', [Validators.required]],
    montantContrat:['', [Validators.required]],
    specialite:['', [Validators.required]]
  });
  contrat: Contrat = new Contrat();

  specialite =Specialite;
  boo: Boolean[]=[true,false];
  constructor(private contratService: ContratService, private router: Router, private c :FormBuilder,private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }
  savecontrat(){
    let e =  this.reactiveForm.getRawValue() ;
    this.contratService.createcontrat(e).subscribe( data =>{
      this.router.navigate(['/contrat/listContrat']);

        this.toastr.success('Contrat ajouté avec succés');
      });
  }



  onSubmit(){
    console.log(this.contrat);
    this.savecontrat();
  }

}
