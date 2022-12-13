import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  totalEtudiants !: number; 
  totalContrats !: number;
  totalEquipes !: number;

  constructor(private etudiantS: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants(); 
    this.getTotalContratsAffectes();
    this.getTotalEquipesAffectes(); 
    
  }

  getEtudiants() {
    this.etudiantS.getAllUsers().subscribe(data => {
      this.totalEtudiants = data.length
    }); 
  }

  getTotalContratsAffectes() {
    this.etudiantS.getTotalContratsAffectes().subscribe(data => {
      this.totalContrats = data
    })
  }

  getTotalEquipesAffectes() {
    this.etudiantS.getTotalEquipesAffectes().subscribe(data => {
      this.totalEquipes = data
    })
  }

}
