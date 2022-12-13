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
  id = 0;
  c!: Contrat;
  specialite = Specialite;

  Form !: FormGroup;


  constructor(private contrat: FormBuilder, private contratService: ContratService, private route: ActivatedRoute,private router: Router
  ) {
  }

  ngOnInit(): void {
    this.Form  = this.contrat.group({

      idContrat: [''],
      dateDebutContrat: [''],
      dateFinContrat: [''],
      archive: [''],
      montantContrat: [''],
      specialite: ['']


    });

    this.contratService.getcontratById(this.route.snapshot.params['idContrat']).subscribe(data => {
      this.c = data;
      this.Form.patchValue({
        idContrat: this.c.idContrat,
        dateDebutContrat: this.c.dateDebutContrat,
        dateFinContrat: this.c.dateFinContrat,
        archive: this.c.archive,
        montantContrat: this.c.montantContrat,
        specialite: this.c.specialite
      });


    });

  }

  get idContrat() {
    return this.Form.get('idContrat')
  }

  get dateDebutContrat() {
    return this.Form.get('dateDebutContrat') as FormControl
  }

  get dateFinContrat() {
    return this.Form.get('dateFinContrat') as FormControl
  }

  get archive() {
    return this.Form.get('archive') as FormControl
  }

  get montantContrat() {
    return this.Form.get('montantContrat') as FormControl
  }

  get specialitee(){
    return this.Form.get('specialite') as FormControl
  }



  onSubmit() {
    this.setAttributes();
    this.contratService.updatecontrat(this.c.idContrat, this.c).subscribe(data => {
      console.log(data);
      this.router.navigate(['/contrat/listContrat']);
    });
  }

  setAttributes(){

    this.c.archive = this.archive.value;
    this.c.dateDebutContrat = this.dateDebutContrat.value;
    this.c.dateFinContrat = this.dateFinContrat.value;
    this.c.montantContrat = this.montantContrat.value;
    this.c.specialite = this.specialitee.value;
    console.log(this.c)
  }

}
