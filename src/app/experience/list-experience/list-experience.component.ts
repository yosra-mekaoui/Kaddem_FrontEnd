import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/Models/Experience';
import { ServiceExperienceService } from 'src/app/service-experience.service';

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.css']
})
export class ListExperienceComponent implements OnInit {
  
  constructor(private serviceExperience:ServiceExperienceService,private router:Router) { }
  list:Experience[]=[]

  ngOnInit(): void {
    this.getListExperience();
  }
  getListExperience(){
    this.serviceExperience.getData().subscribe(
      data=>{this.list=data
      console.log(this.list)}
    )
      
  }

  deleteexperience(id: number){
    this.serviceExperience.deleteExperience(id).subscribe( data => {
      console.log(data);
      this.getListExperience();
    })
  }
  public onOpenModal(experience: Experience, mode: string): void{
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', 'modal');

    }
  }
}
