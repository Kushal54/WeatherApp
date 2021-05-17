import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(city){
    return this.http.get(`https://jsonmock.hackerrank.com/api/weather?name=${city}`);
    console.log("hello")
    console.log("hell")
  }
  //try same with query param
}
