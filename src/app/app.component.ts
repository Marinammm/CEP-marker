import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Address } from './address';
import { Geolocation } from './geolocation';
import { Coordinates } from './coordinates';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Teste LinCare';
  lat: number = -19.9191;
  lng: number = -43.9386;

  constructor (
    private http: HttpClient,
    private address: Address,
    private geolocation: Geolocation
  ){}

  getAddress(CEP: string) {
    this.http.get<Address>("http://viacep.com.br/ws/" + CEP + "/json/").toPromise()
    .then(
      data => {
        this.address.logradouro = data.logradouro;
        this.address.bairro = data.bairro;
        this.address.localidade = data.localidade;
        this.address.uf = data.uf;
        console.log(this.address.logradouro);
        console.log(this.address.bairro);
        this.getCoordinates();
        console.log(this.geolocation);
      })
    .catch(
      error => {
        console.error(error);
      }
    );
  }

  getCoordinates(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address="
    + this.address.logradouro + ",+"
    + this.address.bairro + ",+"
    + this.address.localidade + ",+"
    + this.address.uf
    + "&key=AIzaSyCVJdwlDlLORYD-zlMXo4W4NhuqT2Uaql8";
    let response: Geolocation;
    this.http.get<Geolocation>(url).toPromise()
    .then(
      data => {
        this.geolocation.results = data.results;
        this.geolocation.status = data.status;
        this.setCoordinates();
      })
    .catch(
      error => {
        console.log(error);
      }
    );
  }

  setCoordinates(){
    this.lat = Number(this.geolocation.results[0].geometry.location.lat);
    this.lng = Number(this.geolocation.results[0].geometry.location.lng);
  }

}
