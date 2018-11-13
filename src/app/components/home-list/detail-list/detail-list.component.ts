import { Component, OnInit } from '@angular/core';
import { RequestHttpService } from 'src/app/services/request-http/request-http.service';
import { ActivatedRoute } from '@angular/router';
import { DetailModels } from 'src/app/models/detail-model';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  id: number;
  private sub: any;
  values: DetailModels;

  constructor(private route: ActivatedRoute, private requestHttpService: RequestHttpService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.requestHttpService.getDetailList(this.id).subscribe((data: any) => {
      this.values = data;
    });

  }

}
