import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Services/Etudiant/etudiant.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {
  
  constructor(private route:Router, private etudiantS : EtudiantService) { }

  listEtudiants: Etudiant[] = [];
  input!: any; 
  
  ngOnInit(): void {
    this.getEtudiants(); 
    console.log(this.listEtudiants); 
  }

  getEtudiants() {
    this.etudiantS.getAllUsers().subscribe(data =>
    {
      this.listEtudiants = data; 
    }); 
  }

  deleteEtudiant(id: number) {
    this.etudiantS.deleteUser(id).subscribe(data =>
    {
      console.log("test");
      this.getEtudiants();
    }); 
  }

}
