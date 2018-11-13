import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LatestModels } from '../../models/latest-model';
import { DetailModels } from '../../models/detail-model';

@Injectable()
export class RequestHttpService {
  id: number;
  list: any;
  constructor(private http: HttpClient) {}

  getLatestTvShowList() {
    return this.http.get<LatestModels>('https://api.themoviedb.org/3/tv/latest?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US');
  }

  getMostRatedTvShowList() {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=1');
  }

  getPopularTvShowList() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=1');
  }

  getTvAiringTodayList() {
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US&page=1');
  }
  getDetailList(id) {
    return this.http
      .get<DetailModels>('https://api.themoviedb.org/3/tv/' + id + '?api_key=2acf2189a0f548b1b5ed08bbef8dfeb3&language=en-US');
  }

}
