import { Component, OnInit } from '@angular/core';
import { TheWeatherService } from '../the-weather.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor(public theWeather: TheWeatherService , UserService:UserService,
    private activeRoute:ActivatedRoute, private router:Router) { }
  listOfCities:any=["tel aviv","jerusalem","haifa","bethel"];
    User={cityName:'', temperture:'',weather:''};
  weatheData:any=[];
  list:any=[];
  ShowList(){
      for(let i=0; i<this.listOfCities.length; i++){
        this.theWeather.getWeather(this.listOfCities[i]).subscribe(weatheData =>{
          this.weatheData=weatheData;
          const user={cityName:this.listOfCities[i],
           temperture:this.weatheData.main.temp,
           weather:this.weatheData.weather[0].description}
          this.list.push(user);
        });
      }
      console.log(this.list);
  }
  ngOnInit(): void {           
  }

}
