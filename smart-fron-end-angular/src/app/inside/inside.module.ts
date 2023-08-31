import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { InsideComponent } from './inside.component';
import { HeaderComponent } from './components/header/header.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { SearchForCnpjFormComponent } from './components/application/search-for-cnpj-form/search-for-cnpj-form.component';
import { RegistrationPersonLegalFormComponent } from './components/application/registration-person-legal-form/registration-person-legal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InsideComponent,
    HeaderComponent,
    SearchForCnpjFormComponent,
    RegistrationPersonLegalFormComponent
  ],
  imports: [
    CommonModule,
    InsideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class InsideModule { }
