
import { Team } from 'src/app/models/team.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {
  createTeam(json) {
    return new Team(
      json.idTeam,
      json.strTeam,
      json.strTeamBanner,
      json.strCountry,
      json.strLeague,
      json.strDescriptionFR,
      json.strTeamBadge
    );
  }

  createMultiTeam(teamList) {
    return teamList.map(elm => this.createTeam(elm));
  }
}
