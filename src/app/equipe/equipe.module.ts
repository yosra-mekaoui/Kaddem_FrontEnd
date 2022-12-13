import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogEquipeComponent } from './dialog-equipe/dialog-equipe.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquipeServicesService } from './services/equipe-services.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { DetailsEquipeComponent } from './details-equipe/details-equipe.component'

import { HttpService } from './services/http.service';

import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';








@NgModule({
  declarations: [
    ListEquipeComponent,
    DialogEquipeComponent,
    DetailsEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
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
    MatIconModule,
    QRCodeModule,
    NgxQRCodeModule


    
  ],
  providers: [EquipeServicesService,HttpService],

})
export class EquipeModule { }
