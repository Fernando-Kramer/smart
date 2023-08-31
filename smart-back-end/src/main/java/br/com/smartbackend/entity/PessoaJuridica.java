package br.com.smartbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "pessoa_juridica")
public class PessoaJuridica {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String razaoSocial;

	private String cidade;

	private String situacaoCadastral;

	private String endereco;

	private String telefone;

	private String dataCadastro;

	public PessoaJuridica(String razaoSocial, String cidade, String situacaoCadastral, String endereco,
			String telefone, String dataCadastro) {
		this.razaoSocial = razaoSocial;
		this.cidade = cidade;
		this.situacaoCadastral = situacaoCadastral;
		this.endereco = endereco;
		this.telefone = telefone;
		this.dataCadastro = dataCadastro;
	}

}
