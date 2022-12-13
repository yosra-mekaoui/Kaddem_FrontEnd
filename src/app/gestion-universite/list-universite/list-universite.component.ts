import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { universite } from 'src/app/Models/Universite';
import { ServiceUniversiteService } from 'src/app/serviceUniversite/service-universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  list:universite[]=[];
 // pages!:Array<number>;
  constructor(private serviceUniv:ServiceUniversiteService,private R:Router) { }
pages=[0,1,2,3,4]
page=0;
libelle:string="";
  ngOnInit(): void {
   this.getListUniv();
  }
  setpage(i:number,event:any){
   // event.prevendDefault();
    this.page=i;
   // alert(this.page)
    this.getWtithpagination();
  }
  getListUniv(){
    this.serviceUniv.getData().subscribe(
      data=>{this.list=data;
      //console.log(this.list);
     
    }
    )
      
  }
 
  getWtithpagination(){
   // alert(this.page)
    this.serviceUniv.getWtithpagination(this.page).subscribe(data=>{
      this.list=data;
    
    });
  }
  DeleteUniv(id:number)
  {
   
this.serviceUniv.delete(id).subscribe(
  data =>  {
  console.log(data);
this.getListUniv();
});} 
}
