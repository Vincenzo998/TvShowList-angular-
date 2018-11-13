import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from './../../../services/request-http/request-http.service';

@Component({
  selector: 'app-most-rated-tv-show',
  templateUrl: './most-rated-tv-show.component.html',
  styleUrls: ['./most-rated-tv-show.component.css']
})
export class MostRatedTvShowComponent implements OnInit {

  list: any;
  constructor(public requestHttpService: RequestHttpService) { }

  ngOnInit() {
    this.requestHttpService.getMostRatedTvShowList().subscribe((data: any) => {
      this.list = data.results;
    });
  }

}
