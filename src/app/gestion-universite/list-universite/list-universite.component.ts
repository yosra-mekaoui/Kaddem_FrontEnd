import { Component, OnInit } from '@angular/core';
import { universite } from 'src/app/Models/Universite';
import { ServiceUniversiteService } from 'src/app/serviceUniversite/service-universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  list:universite[]=[]
  constructor(private serviceUniv:ServiceUniversiteService) { }

  ngOnInit(): void {
   this.getListUniv();
  }
  getListUniv(){
    this.serviceUniv.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);
    
    }
    )
      
  }
  DeleteUniv(id:number)
  {
   
this.serviceUniv.delete(id).subscribe(
  data =>  {
  console.log(data);
this.getListUniv();
});} 
}
