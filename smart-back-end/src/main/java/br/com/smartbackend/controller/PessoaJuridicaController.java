package br.com.smartbackend.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.smartbackend.controller.dto.PessoaJuridicaApiDTO;
import br.com.smartbackend.controller.dto.PessoaJuridicaDTO;
import br.com.smartbackend.service.ConsultaCnpjApiService;
import br.com.smartbackend.service.PessoaJuridicaService;

@RestController
@RequestMapping("/pessoaJuridica")
public class PessoaJuridicaController {

	@Autowired
	private ConsultaCnpjApiService apiService;

	@Autowired
	private PessoaJuridicaService service;

	@GetMapping("/{cnpj}")
	private ResponseEntity<PessoaJuridicaApiDTO> getPessoaJuridicaByApi(@PathVariable String cnpj) {
		var pessoaJuridica = this.apiService.getPessoaJuridicaByApi(cnpj);
		return ResponseEntity.ok(pessoaJuridica);
	}

	@PostMapping
	private ResponseEntity<PessoaJuridicaDTO> savePessoaJuridicaLocal(@RequestBody PessoaJuridicaDTO dto,
			UriComponentsBuilder uriBuilder) {
		var pessoaJuridica = this.service.savePessoaJuridicaLocal(dto);
		URI uri = uriBuilder.path("/{id}").buildAndExpand(pessoaJuridica.getId()).toUri();
		return ResponseEntity.created(uri).body(pessoaJuridica);
	}

}
