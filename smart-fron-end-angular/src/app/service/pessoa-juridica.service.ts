import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonByApi } from '../shared/objects/PersonByApi';
import { PersonLegal } from '../shared/objects/PersonLegal';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
   }

  getCnpjDetails(cnpj: string): Observable<PersonByApi> {
    const url = `${this.baseUrl}/pessoaJuridica/${cnpj}`;
    return this.http.get<PersonByApi>(url);
  }

  savePersonLegal(person: PersonLegal): Observable<PersonLegal> {
    const url = `${this.baseUrl}/pessoaJuridica`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<PersonLegal>(url, person, httpOptions);
  }
}
