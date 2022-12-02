import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExperienceComponent } from './list-experience/list-experience.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';


const routes: Routes = [
  {path: '', component:ListExperienceComponent},
  {path:'addExperience',component:AddExperienceComponent},
  {path: 'update/:idExperience', component:UpdateExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
