package br.com.smartbackend.controller.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PessoaJuridicaApiDTO {

	private String razaoSocial;

	private String cidade;

	private String situacaoCadastral;

	private String dataCadastro;

	public PessoaJuridicaApiDTO(String razaoSocial, String cidade, String situacaoCadastral, String dataCadastro) {
		this.razaoSocial = razaoSocial;
		this.cidade = cidade;
		this.situacaoCadastral = situacaoCadastral;
		this.dataCadastro = dataCadastro;
	}

}
