import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { Etudiant } from 'src/app/Models/Etudiant';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contrat } from 'src/app/Models/Contrat'; 
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-get-contrats',
  templateUrl: './get-contrats.component.html',
  styleUrls: ['./get-contrats.component.css']
})
export class GetContratsComponent implements OnInit {
  
  listContrats: Contrat[] = []; 
  totalContrats !: number;

  allContrats: Contrat[] = [];  
  selectedContrat = '';

  @Input() id = '';
  @Output() newItemEvent = new EventEmitter<Number>();

  constructor(private etudiantS: EtudiantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContratsByEtudiant(); 
    
    this.getContrats(); 
  }

  getContratsByEtudiant() {
    this.etudiantS.getContratsByEtudiant(+this.id).subscribe(data =>
    { 
      this.listContrats = data; 
      this.totalContrats = this.listContrats.length;
      this.newItemEvent.emit(this.listContrats.length); 
    }); 
  }

  getContrats() {
    this.etudiantS.getAllContrats().subscribe(data =>
    { 
      this.allContrats = data; 
      
    }); 
  }

  assignContratToEtudiant() {
    this.etudiantS.assignContratToEtudiant( +this.selectedContrat , +this.id).subscribe(data =>
    { 
      this.getContratsByEtudiant();   
    }); 
  }

  onSelected(value:string): void {
		this.selectedContrat = value;
  }

  removeContratAffecte(idEtudiant : number , idContrat : number) {
    this.etudiantS.removeContratAffecte(idEtudiant , idContrat).subscribe(data =>
    { 
      this.getContratsByEtudiant();   
    }); 
  }

  deleteContrat(contrat:number) {
    this.removeContratAffecte(+this.id, contrat); 
  }
}
