import {Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[]; 
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  city:string;
  data:any;
  err:string;
  isLoading:boolean = false;
  init:boolean = true;
  temp:number;

  constructor(private weather:WeatherService){

  }

  ngOnInit(): void {
  }

  getWeatherData(){
    
    if(!this.city){
      this.err = "city not present";
      return;
    }
   
    this.isLoading = true;
    this.weather.getWeather(this.city)
    .subscribe( res => {
      
      this.data = res['data'];
      this.init = false;
      if(this.data && this.data.length>=1 && this.data[0].name.toUpperCase()==this.city.toUpperCase()){
        var s = this.data[0].weather;
        this.temp = parseInt(s.split(' ')[0])
        this.err = null;
      }
      else{
        this.err = "incorrect city name"
      }
      console.log(this.data);
      this.isLoading = false;

     
    }, err => {
      console.log(err);
      this.isLoading = false;
    })

    
  }


}
