import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cityWeather={
    cityName:'',
    temperture:'',
    weather:''
  }
  constructor() { }
}
