import { RegistrationPersonLegalFormComponent } from './components/application/registration-person-legal-form/registration-person-legal-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsideComponent } from './inside.component';
import { SearchForCnpjFormComponent } from './components/application/search-for-cnpj-form/search-for-cnpj-form.component';

const routes: Routes = [
  {path: '', component: InsideComponent, children: [
    {path: '', redirectTo: 'serch-for-cnpj', pathMatch: 'prefix'},
    {path: 'serch-for-cnpj', component: SearchForCnpjFormComponent},
    {path: 'registration-person-legal', component: RegistrationPersonLegalFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideRoutingModule { }
