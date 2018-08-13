import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Address{
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;

  constructor(){
    this.logradouro = "";
    this.bairro = "";
    this.localidade = "";
    this.uf = "";
  }
}
