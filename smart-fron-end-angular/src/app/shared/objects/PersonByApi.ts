export class PersonByApi {
  razaoSocial: string;
  cidade: string;
  situacaoCadastral: string;
  dataCadastro: string;

  constructor(
    razaoSocial: string,
    cidade: string,
    situacaoCadastral: string,
    dataCadastro: string
  ) {
    this.razaoSocial = razaoSocial;
    this.cidade = cidade;
    this.situacaoCadastral = situacaoCadastral;
    this.dataCadastro = dataCadastro;
  }
}
