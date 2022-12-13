import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant'; 
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {
  
  constructor(private route:Router, private etudiantS : EtudiantService) { }

  listEtudiants: Etudiant[] = [];
  input!: any; 
  nombre = 4; 
  page = 1;
  
  ngOnInit(): void {
    this.pagination(this.nombre,this.page); 
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

  exportPDF(){
    this.etudiantS.pdfExport().subscribe(data=>{
      const blob = new Blob([data], {type: 'application/pdf'});
      if(window.navigator &&   (window.navigator as any).msSaveOrOpenBlob){
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "etudiant.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }


  exportExcel(){
    this.etudiantS.excelExport().subscribe(data=>{
      const blob = new Blob([data], {type: 'application/pdf'});
      if(window.navigator &&   (window.navigator as any).msSaveOrOpenBlob){
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "etudiant.xlsx";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }


  pagination(nbre: number, page: number) {
    this.etudiantS.pagination(nbre, page).subscribe(
      data => {
        this.listEtudiants = data
      }
    )
  }
}
