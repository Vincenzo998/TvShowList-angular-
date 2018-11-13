import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from './../../../services/request-http/request-http.service';

@Component({
  selector: 'app-latest-tv-show-list',
  templateUrl: './latest-tv-show-list.component.html',
  styleUrls: ['./latest-tv-show-list.component.css']
})

export class LatestTvShowListComponent implements OnInit {

  list: any;
  constructor(public requestHttpService: RequestHttpService) { }

  ngOnInit() {
   this.requestHttpService.getLatestTvShowList().subscribe((data) => {
      this.list = data;
    });
  }

}
