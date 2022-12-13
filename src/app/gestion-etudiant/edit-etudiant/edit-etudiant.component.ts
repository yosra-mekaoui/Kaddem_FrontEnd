import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'; 
import { Etudiant } from 'src/app/Models/Etudiant';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { EtudiantService } from 'src/app/Services/etudiant.service';

 

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
  
  
export class EditEtudiantComponent implements OnInit {
  
  etudiantForm = this.fb.group({
    idEtudiant:[''],
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    dateNaissance : ['', Validators.required],
    option: ['GAMIX'] 
  });


  
  constructor(private fb: FormBuilder, private etudiantS: EtudiantService, private router: Router, private route: ActivatedRoute) { }
  
  id!: any;
  etudiant !: Etudiant;  
  totalContrats = 0; 
  totalEquipes = 0; 
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEtudiant();  
    this.etudiant.idEtudiant = this.id; 
        
  }

  getEtudiant() {
    this.etudiantS.getEtudiantById(this.id).subscribe(data =>
    {
      this.etudiant = data; 
      this.etudiantForm.patchValue({
        idEtudiant : data.idEtudiant, 
        prenom: this.etudiant.prenom,
        nom: this.etudiant.nom,
        option: this.etudiant.option 
      }); 
    }); 
  }


  updateEtudiant() {
    let e = this.etudiantForm.getRawValue(); 
    //e.idEtudiant = this.id; 
    this.etudiantS.updateEtudiant(e).subscribe(data => {
      this.router.navigate(['/etudiant'])
    }); 
  }


  
  updateTotalContrats(x: any) {
    this.totalContrats = x; 
  }
  
  updateTotalEquipes(x: any) {
    this.totalEquipes = x; 
  }

}





 