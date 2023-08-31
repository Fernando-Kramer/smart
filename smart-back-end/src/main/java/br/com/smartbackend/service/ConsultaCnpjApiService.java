package br.com.smartbackend.service;

import br.com.smartbackend.controller.dto.PessoaJuridicaApiDTO;

public interface ConsultaCnpjApiService {

	PessoaJuridicaApiDTO getPessoaJuridicaByApi(String cnpj);

}
