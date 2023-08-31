export class PersonLegal {
  id: number;
  razaoSocial: string;
  cidade: string;
  situacaoCadastral: string;
  endereco: string;
  telefone: string;
  dataCadastro: string;

  constructor(
    id: number,
    razaoSocial: string,
    cidade: string,
    situacaoCadastral: string,
    endereco: string,
    telefone: string,
    dataCadastro: string
  ) {
    this.id = id;
    this.razaoSocial = razaoSocial;
    this.cidade = cidade;
    this.situacaoCadastral = situacaoCadastral;
    this.endereco = endereco;
    this.telefone = telefone;
    this.dataCadastro = dataCadastro;
  }
}
