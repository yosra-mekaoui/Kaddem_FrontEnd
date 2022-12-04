import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExperienceComponent } from './list-experience/list-experience.component';


const routes: Routes = [
  {path: 'Listexperience', component:ListExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
