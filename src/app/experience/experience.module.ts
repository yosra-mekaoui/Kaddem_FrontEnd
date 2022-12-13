import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ListExperienceComponent } from './list-experience/list-experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogExperienceComponent } from './dialog-experience/dialog-experience.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'

import { ServiceExperienceService } from 'src/app/service-experience.service';
import { AffichageComponent } from './affichage/affichage.component';


@NgModule({
  declarations: [
    ListExperienceComponent,
  
    DialogExperienceComponent,
       AffichageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExperienceRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [ServiceExperienceService],
})
export class ExperienceModule { }
