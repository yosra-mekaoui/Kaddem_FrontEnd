import { Component, OnInit } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/Services/Etudiant/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  etudiantForm = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    option: ['GAMIX'] 
  });
  constructor(private fb: FormBuilder, private etudiantS : EtudiantService, private router: Router) { }

  ngOnInit(): void {
  }

  addEtudiant() {
    let e =  this.etudiantForm.getRawValue() ; 
    this.etudiantS.addEtudiant(e).subscribe(data =>
    {
      this.router.navigate(['/etudiant'])
    }); 
  }
}
