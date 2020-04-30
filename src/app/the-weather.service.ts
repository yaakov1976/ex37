import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TheWeatherService {
answer:any=[];
temp={};
t:string;
temperture:string;
weather:string;
weatheData:any=[];
  constructor(private httpClient:HttpClient) { }
 
  getWeather(cityName){
  return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dc8e93e75a318b31451f9a7fb126a77c&units=metric`);
  }
}