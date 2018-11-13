import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from './../../../services/request-http/request-http.service';

@Component({
  selector: 'app-popular-tv-show-list',
  templateUrl: './popular-tv-show-list.component.html',
  styleUrls: ['./popular-tv-show-list.component.css']
})
export class PopularTvShowListComponent implements OnInit {
  list: any;
  constructor(public requestHttpService: RequestHttpService) { }

  ngOnInit() {
    this.requestHttpService.getPopularTvShowList().subscribe((data: any) => {
      this.list = data.results;
    });
  }
}
