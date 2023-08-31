import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaJuridicaService } from 'src/app/service/pessoa-juridica.service';
import { PersonByApi } from 'src/app/shared/objects/PersonByApi';
import { PersonLegal } from 'src/app/shared/objects/PersonLegal';
import { LocalStorageService } from 'src/app/shared/utils/LocalStorageService';

@Component({
  selector: 'app-registration-person-legal-form',
  templateUrl: './registration-person-legal-form.component.html',
  styleUrls: ['./registration-person-legal-form.component.css'],
})
export class RegistrationPersonLegalFormComponent implements OnInit {
  localStorageService = new LocalStorageService('personByApi');

  personByApi!: PersonByApi;

  formCreate!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private service: PessoaJuridicaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personByApi = this.localStorageService.getObject();
    this.localStorageService.removeObject();
    if (this.personByApi !== null) {
      this.createForm();
    } else {
      this.createFormNotError();
      this.router.navigate(['home/serch-for-cnpj']);
    }
    this.formCreate.controls['telefone'].valueChanges.subscribe((value) => {
      const rawValue = value.replace(/[^\d]/g, '');
      const formattedValue = this.formatTelefone(rawValue);
      this.formCreate.controls['telefone'].setValue(formattedValue, {
        emitEvent: false,
      });
    });
  }

  createForm() {
    this.formCreate = this.formBuider.group({
      id: [{ value: null, disabled: true }, []],
      razaoSocial: [
        { value: this.personByApi.razaoSocial, disabled: true },
        [],
      ],
      cidade: [{ value: this.personByApi.cidade, disabled: true }, []],
      situacaoCadastral: [
        { value: this.personByApi.situacaoCadastral, disabled: true },
        [],
      ],
      endereco: ['', [Validators.required]],
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
        ],
      ],
      dataCadastro: [
        { value: this.personByApi.dataCadastro, disabled: true },
        [],
      ],
    });
  }

  createFormNotError() {
    this.formCreate = this.formBuider.group({
      id: [null, []],
      razaoSocial: ['', []],
      cidade: ['', []],
      situacaoCadastral: ['', []],
      endereco: ['', []],
      telefone: ['', []],
      dataCadastro: ['', []],
    });
  }

  savePersonlegal() {
    const person = this.formCreate.value as PersonLegal;
    person.razaoSocial = this.personByApi.razaoSocial;
    person.cidade = this.personByApi.cidade;
    person.dataCadastro = this.personByApi.dataCadastro;
    person.situacaoCadastral = this.personByApi.situacaoCadastral;
    console.log("pessoa", person)
    this.service.savePersonLegal(person).subscribe(
      (response) => {
        alert('Pessoa Juridica criada com sucesso! ID: ' + response.id);
        this.router.navigate(['home/serch-for-cnpj']);
      },
      (error) => {
        alert(error);
      }
    );
  }

  returnToSearch() {
    this.router.navigate(['home/serch-for-cnpj']);
  }

  formatTelefone(telefone: string): string {
    const ddd = telefone.substring(0, 2);
    const part1 = telefone.substring(2, 6);
    const part2 = telefone.substring(6, 10);
    let formattedTelefone = `(${ddd}) ${part1}-${part2}`;
    return formattedTelefone;
  }
}
