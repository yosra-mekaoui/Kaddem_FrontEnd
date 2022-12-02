import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';


@NgModule({
  declarations: [
    ListEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
