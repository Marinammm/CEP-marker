import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Coordinates{
  geometry: {
    location: {
      lat: string;
      lng: string;
    }
  }

  constructor(){
    this.geometry = {
      location: {
        lat: "",
        lng: ""
      }
    };
  }
}
