import { Injectable } from '@angular/core';
import { Coordinates } from './coordinates';

@Injectable({
  providedIn: 'root',
})

export class Geolocation{
  status: boolean
  results: Array<Coordinates>;

  constructor(){
    this.status = false;
    this.results = [];
  }
}
