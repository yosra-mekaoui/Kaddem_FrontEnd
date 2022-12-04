import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import {GestionContratRoutingModule} from './gestion-contrat-routing.module';
import {MatIconModule} from "@angular/material/icon";
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { UpdatecontratComponent } from './updatecontrat/updatecontrat.component';
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [
    ListContratComponent,
    AddcontratComponent,
    UpdatecontratComponent
  ],
    imports: [
        CommonModule,
        GestionContratRoutingModule,
        MatIconModule,
        MatCardModule,
        MatRadioModule,
        MatInputModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCheckboxModule,
        FormsModule,
        MatDatepickerModule
    ],
  exports:[ListContratComponent]
})
export class GestionContratModule { }
