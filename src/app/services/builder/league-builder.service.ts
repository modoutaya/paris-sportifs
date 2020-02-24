
import { League } from 'src/app/models/league.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeagueBuilderService {
  createLeague(json) {
    return new League(
      json.idLeague,
      json.strLeague,
      json.strSport,
      json.strLeagueAlternate
    );
  }
  createMultiLeague(leagueList) {
    return leagueList.map(elm => this.createLeague(elm));
  }
}
