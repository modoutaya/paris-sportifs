import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { League } from 'src/app/models/league.model';
import { LeagueBuilderService } from '../builder/league-builder.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public LEAGUE_BASE_URL: string = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';

  constructor(private http: HttpClient, private leagueBuilderService: LeagueBuilderService) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.LEAGUE_BASE_URL}`).pipe(
      pluck('leagues')
    );
  }

  search(leagues: any[], queryString: string): Observable<League[]> {
    return of(leagues.filter(elm => this._searchByName(elm, queryString)))
    .pipe(
      map(json => this.leagueBuilderService.createMultiLeague(json))
    );
  }

  _searchByName(elm, queryString) {
    return _
    .chain(elm)
    .get('strLeague', '')
    .lowerCase()
    .includes(queryString.toLowerCase())
    .value();
  }
}
