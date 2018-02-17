import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SearchCepService } from './search-cep.service';

import { Address } from 'app/view-cep/address';

@Component({
	selector: 'app-view-cep',
	templateUrl: './view-cep.component.html',
	styleUrls: ['./view-cep.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ViewCepComponent implements OnInit {

	cep: string = '';
	street: string = '';
  complement: string = '';
  neighborhood: string = '';
	locale: string = '';
  state: string = '';
  unit: string = '';
	ibge: string = '';
  gia: string = '';

  errorMsgHide = true;

	public myModel = ''
  public mask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

	constructor(private searchCepService: SearchCepService) { }

	ngOnInit() {
	}

	validateCep(cep) {
		if(cep.length === 0) {
			this.newSearch();
		} else {
			cep = cep.replace(/\D/g, '');
			if(cep.length === 8) {
				this.searchCep(cep);
			}
		}
	}

	searchCep(cep: Address) {
		this.searchCepService.searchCep(cep)
			.subscribe((res) => {
				if(res.erro) {
          this.errorMsgHide = false;
          return;
        }
        this.street = res.logradouro;
        this.complement = res.complemento;
        this.neighborhood = res.bairro;
        this.locale = res.localidade;
        this.state = res.uf;
        this.unit = res.unidade;
        this.ibge = res.ibge;
        this.gia = res.gia;

			}, (err) => {
        console.log(err);
			});
	}

	newSearch() {
		this.myModel = '';
    this.street = '';
    this.complement = '';
    this.neighborhood = '';
    this.locale = '';
    this.state = '';
    this.unit = '';
    this.ibge = '';
    this.gia = '';

    this.errorMsgHide = true;

    document.getElementById("cep").focus();
	}

}

