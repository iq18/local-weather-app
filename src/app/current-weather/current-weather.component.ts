import { WeatherService } from './../weather/weather.service';
import { ICurrentWeather } from './../interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {
    this.weatherService.getCurrentWeather('Cork', 'IE')
    .subscribe((data) => this.current = data);
  }

  ngOnInit() {
  }

}
