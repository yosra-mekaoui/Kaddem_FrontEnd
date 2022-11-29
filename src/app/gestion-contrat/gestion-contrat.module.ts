import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import {GestionContratRoutingModule} from './gestion-contrat-routing.module';



@NgModule({
  declarations: [
    ListContratComponent
  ],
  imports: [
    CommonModule,
    GestionContratRoutingModule
  ],
  exports:[ListContratComponent]
})
export class GestionContratModule { }
