import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { ListDepartementComponent } from './list-departement/list-departement.component';


@NgModule({
  declarations: [
    ListDepartementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionDepartementRoutingModule
  ],
  exports: [
    ListDepartementComponent
  ]
})
export class GestionDepartementModule { }
