import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tram',
  templateUrl: './tram.component.html',
  styleUrls: ['./tram.component.css'],
})
export class TramComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.getTrams();
  }

  Trams!: any[];

  interval: any;
  getTrams() {
    //getting trams using http request with the api key provided and putting filters to get the needed trams only
    //timewindow=60 -> to get the next hour &Train=false / Metro=false / Bus=false to exclude therir results and get only trams
    //siteid=1555 is the station id which i got from SL site lookup apis
    this.http
      .get(
        'https://api.sl.se/api2/realtimedeparturesV4.Json?key=b6ee73bfceec46b38f96897d45e988ff&siteid=1555&timewindow=60&Train=false&Metro=false&Bus=false'
      )
      .subscribe((Response) => {
        console.log(Response);
        const data: any = Response;
        const allTrams: any[] = data.ResponseData.Trams;
        const previousStations: string[] = [
          'suma',
          'sickla kaj',
          'sickla udde',
          'sickla',
        ];
        //filtering trams got from the response to remove the trams moving in the opposite direction
        if (
          allTrams != undefined &&
          allTrams != null &&
          allTrams.length !== 0
        ) {
          this.Trams = [];
          allTrams.map((tram) => {
            if (!previousStations.includes(tram.Destination.toLowerCase())) {
              this.Trams.push(tram);
            }
          });
        }
      });
  }
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getTrams();
    }, 60000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
