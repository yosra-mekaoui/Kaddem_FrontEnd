import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
import { Etudiant } from 'src/app/Models/Etudiant';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { Equipe } from 'src/app/equipe/models/Equipe';
import { EtudiantService } from 'src/app/Services/etudiant.service';


@Component({
  selector: 'app-get-equipes',
  templateUrl: './get-equipes.component.html',
  styleUrls: ['./get-equipes.component.css']
})
export class GetEquipesComponent implements OnInit {
  @Input() id = '';
  @Output() newItemEvent = new EventEmitter<Number>();
  listEquipes: Equipe[] = [];   
  totalEquipes !: number;
  
  allEquipes: Equipe[] = []; 
  selectedEquipe = ''; 

  constructor(private etudiantS: EtudiantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEquipesByEtudiant(); 
    
    this.getEquipes();
  }

  getEquipesByEtudiant() {
    this.etudiantS.getEquipesByEtudiant(+this.id).subscribe(data =>
    { 
      this.listEquipes = data; 
      this.totalEquipes = this.listEquipes.length;
      this.newItemEvent.emit(this.listEquipes.length); 
    }); 
  }


  assignEquipeToEtudiant() {
    this.etudiantS.assignEquipeToEtudiant( +this.selectedEquipe , +this.id).subscribe(data =>
    { 
      this.getEquipesByEtudiant();   
    }); 
  }
  

  

  
  
  getEquipes() {
    this.etudiantS.getAllEquipes().subscribe(data =>
    { 
      this.allEquipes = data;  
    }); 
  }

  onSelected2(value:string): void {
		this.selectedEquipe = value;
  }

  removeEquipeAffecte(idEtudiant: number, idEquipe : number) {
    this.etudiantS.removeEquipeAffecte(idEtudiant , idEquipe).subscribe(data =>
    { 
      this.getEquipesByEtudiant();   
    }); 
  }

  deleteEquipe(equipe: number) {
    this.removeEquipeAffecte(+this.id, equipe); 
  }
}
