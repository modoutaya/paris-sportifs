import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';
import { League } from 'src/app/models/league.model';
import {map, pluck} from 'rxjs/operators';
import { TeamBuilderService } from '../builder/team-builder.service';
import { Team } from 'src/app/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public LEAGUE_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php';
  public TEAM_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php';

  constructor(private http: HttpClient, private teamBuilderService: TeamBuilderService) { }

  getTeamsByLeague(league: League) {
    return this.http.get<Team[]>(`${this.LEAGUE_BASE_URL}?l=${league.league}`)
    .pipe(
      pluck('teams'),
      map(json => this.teamBuilderService.createMultiTeam(json))
    );
  }

  getTeamById(id: number) {
    return this.http.get<Team[]>(`${this.TEAM_BASE_URL}?id=${id}`)
    .pipe(
      pluck('teams'),
      map(json => this.teamBuilderService.createTeam(_.head(json)))
    );
  }
}
