import { Component, OnInit } from '@angular/core';
import { ServiceExperienceService } from 'src/app/service-experience.service';

@Component({
  selector: 'app-export-experience',
  templateUrl: './export-experience.component.html',
  styleUrls: ['./export-experience.component.css']
})
export class ExportExperienceComponent implements OnInit {

  constructor(private experienceService:ServiceExperienceService ) { }

  ngOnInit(): void {
  }
exportExperience(){
  
}
}
