package br.com.smartbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.smartbackend.controller.dto.PessoaJuridicaDTO;
import br.com.smartbackend.repository.PessoaJuridicaRepository;
import br.com.smartbackend.service.PessoaJuridicaService;

@Service
public class PessoaJuridicaServiceImpl implements PessoaJuridicaService {

	@Autowired
	private PessoaJuridicaRepository repository;

	@Override
	public PessoaJuridicaDTO savePessoaJuridicaLocal(PessoaJuridicaDTO dto) {
		var pessoaJuridica = dto.converterDtoToEntity();
		return new PessoaJuridicaDTO(this.repository.save(pessoaJuridica));
	}

}
