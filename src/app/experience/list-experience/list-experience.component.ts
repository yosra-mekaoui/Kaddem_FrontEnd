import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogExperienceComponent } from '../dialog-experience/dialog-experience.component';
import { ServiceExperienceService } from 'src/app/service-experience.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.css']
})

export class ListExperienceComponent implements OnInit {
  displayedColumns: string[] = ['idExperience','type','titreDuProfil','dateDebutExperience','dateFinExperience','descriptif','lieu','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    private experienceService:ServiceExperienceService) {}

    openDialog() {
    this.dialog.open(DialogExperienceComponent, {
    width:'30%'

    }).afterClosed().subscribe(val=>{
    if(val==='ajout'){
    this.getAllExperiences()
    }
    });
    }

    ngOnInit(): void {
      this.getAllExperiences()

    }





  nbr=0;
    getAllExperiences(){
    this.experienceService.getExperience()
    .subscribe({
    next: (res)=>{
      this.nbr=res.length;// teb3a l'input property
    console.log(res);
    this.dataSource=new MatTableDataSource(res)
    console.log("heeeelooo");

    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort

    },
    error:()=>{
    alert("erreur get all")}})
      }



    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
    }
    }



      editExperience(row :any) {
      this.dialog.open(DialogExperienceComponent, {
      width:'30%',
      data:row

      }).afterClosed().subscribe(val=>{
      if(val==='update'){
      this.getAllExperiences()
      }
      });;
      }







deleteExperience(id: number){
  this.experienceService.deleteExperience(id).subscribe( data => {
    alert("experience bien supprimer")

    this.getAllExperiences()


})
}


exportExperience(){
  this.experienceService.exportPdfExperiences().subscribe(x => {
    const blob = new Blob([x], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    const nav = (window.navigator as any);
if (nav.msSaveOrOpenBlob) {
  nav.msSaveOrOpenBlob(blob);
  return;
}

  const data = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href= data;
  link.download="experience.pdf";
  link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

  setTimeout(function() {
    window.URL.revokeObjectURL(data);
    link.remove();
  }, 100);
});

  }



  exportExperienceExcel(){
    this.experienceService.exportExcelExperiences().subscribe(x => {
      const blob = new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const n = (window.navigator as any);
if (n.msSaveOrOpenBlob) {
  n.msSaveOrOpenBlob(blob);
  return;
}
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download="experience.xlsx";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
});

  }

}
