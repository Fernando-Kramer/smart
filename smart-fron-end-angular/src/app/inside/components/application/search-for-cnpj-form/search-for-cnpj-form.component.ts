import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaJuridicaService } from 'src/app/service/pessoa-juridica.service';
import { LocalStorageService } from 'src/app/shared/utils/LocalStorageService';

@Component({
  selector: 'app-search-for-cnpj-form',
  templateUrl: './search-for-cnpj-form.component.html',
  styleUrls: ['./search-for-cnpj-form.component.css'],
})
export class SearchForCnpjFormComponent implements OnInit {
  localStorageService = new LocalStorageService('personByApi');

  formSearch!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private service: PessoaJuridicaService,
    private router: Router
  ) {
    this.formSearch = this.formBuider.group({
      cnpj: [
        '',
        [
          Validators.required,
          Validators.minLength(18),
          Validators.maxLength(18),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.formSearch.controls['cnpj'].valueChanges.subscribe((value) => {
      const rawValue = value.replace(/[^\d]/g, '');
      const formattedValue = this.formatCnpj(rawValue);
      this.formSearch.controls['cnpj'].setValue(formattedValue, {
        emitEvent: false,
      });
    });
  }

  formatCnpj(cnpj: string): string {
    const cnpjParts = cnpj.match(
      /(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/
    );
    if (!cnpjParts) {
      return '';
    }
    const formattedCnpj = cnpjParts
      .slice(1)
      .filter((part) => part !== '')
      .join('.');
    return formattedCnpj;
  }

  search() {
    const cnpj = this.formSearch.value.cnpj.replace(/\./g, '');
    this.service.getCnpjDetails(cnpj).subscribe(
      (response) => {
        this.localStorageService.saveObject(response);
        this.router.navigate(['home/registration-person-legal']);
      },
      (error) => {
        alert('Erro ao obter detalhes do CNPJ');
      }
    );
  }
}
