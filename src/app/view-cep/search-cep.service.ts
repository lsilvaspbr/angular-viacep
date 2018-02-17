import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Address } from 'app/view-cep/address';

@Injectable()
export class SearchCepService {

	constructor(private http: Http) {}

	searchCep(cep: Address): Observable<Address> {
		return this.http.get(`http://viacep.com.br/ws/${cep}/json/`)
						.map(res => res.json())
						.catch((err) => Observable.throw(err._body));
  	}
}

