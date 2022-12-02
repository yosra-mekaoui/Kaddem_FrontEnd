import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUniversiteRoutingModule } from './gestion-universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';


@NgModule({
  declarations: [
    ListUniversiteComponent
  ],
  imports: [
    CommonModule,
    GestionUniversiteRoutingModule
  ]
})
export class GestionUniversiteModule { }
