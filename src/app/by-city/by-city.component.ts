import { Component, OnInit } from '@angular/core';
import { TheWeatherService } from '../the-weather.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {
  constructor(public theWeather: TheWeatherService , 
    private activeRoute:ActivatedRoute, private router:Router) {
   }
  weatheData:any=[];
flag:boolean=false;
  cityName:string;
  temperture:string;
  weather:string;
  getCity(cityName){
    this.flag=true;
    this.cityName=cityName;
    this.theWeather.getWeather(cityName).subscribe(weatheData =>{
      this.weatheData=weatheData;
      this.temperture=this.weatheData.main.temp;
      this.weather=this.weatheData.weather[0].description;
    });
  }

  ngOnInit(): void {
    console.log(this.flag);
    
  }
}
