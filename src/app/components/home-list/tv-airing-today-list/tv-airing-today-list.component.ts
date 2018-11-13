import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from './../../../services/request-http/request-http.service';

@Component({
  selector: 'app-tv-airing-today-list',
  templateUrl: './tv-airing-today-list.component.html',
  styleUrls: ['./tv-airing-today-list.component.css']
})
export class TvAiringTodayListComponent implements OnInit {

  list: any;
  constructor(public requestHttpService: RequestHttpService) { }

  ngOnInit() {
    this.requestHttpService.getTvAiringTodayList().subscribe((data: any) => {
      this.list = data.results;
    });
  }

}
