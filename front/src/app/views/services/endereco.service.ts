import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endereco } from '../models/endereco'
@Injectable()
export class EnderecoService {
  private baseUrl = 'http://localhost:3000/enderecos';
  constructor( private http: HttpClient ) { }

  getEnderecos() {
    return this.http.get(this.baseUrl);
  }

  create(endereco: Endereco) {
      return this.http.post(this.baseUrl, endereco);
  }

  update(endereco: Endereco) {
      return this.http.put(this.baseUrl + '/' + endereco.id, endereco);
  }

  delete(endereco: Endereco) {
      return this.http.delete(this.baseUrl + '/' + endereco.id);
  }
}
