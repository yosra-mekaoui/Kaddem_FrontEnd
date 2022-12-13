import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';

import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 
import { GestionEtudiantModule } from './gestion-etudiant/gestion-etudiant.module';
import { GestionContratModule } from './gestion-contrat/gestion-contrat.module';


import { ExperienceModule } from './experience/experience.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GestionDepartementModule } from './gestion-departement/gestion-departement.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperienceModule,
    HttpClientModule,
    GestionEtudiantModule,
    GestionContratModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    GestionDepartementModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule




  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
