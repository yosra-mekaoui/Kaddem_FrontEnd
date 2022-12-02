import { Component, OnInit,ViewChild } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEquipeComponent } from '../dialog-equipe/dialog-equipe.component';
import { EquipeServicesService } from '../services/equipe-services.service';



import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';







@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {


  displayedColumns: string[] = ['logo','name','email','niveau','nombreMax','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private equipeService:EquipeServicesService) {}

  openDialog() {
    this.dialog.open(DialogEquipeComponent, {
        width:'30%'
      
    }).afterClosed().subscribe(val=>{
      if(val==='ajout'){
        this.getAllEquipes()
      }
    });
  }

  ngOnInit(): void {
    this.getAllEquipes()
    
  }






  getAllEquipes(){
    this.equipeService.getEquipe()
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.dataSource=new MatTableDataSource(res)
        console.log("heeeelooo");

        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
       
      },
      error:()=>{
        alert("erreur get all")
      }


    })
  


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  editEquipe(row :any) {
    this.dialog.open(DialogEquipeComponent, {
        width:'30%',
        data:row
      
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllEquipes()
      }
    });;
  }





  deleteEquipe(id:number){

    this.equipeService.deleteEquipe(id)
    .subscribe({
      next: (res)=>{
        alert("equipe bien supprimer")
        this.getAllEquipes()

      },
      error:()=>{
        alert("erreur de suppression")
      }


    })
     
  }







}
