
import { Team } from 'src/app/models/team.model';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';

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
    return _.chain(teamList).defaultTo([]).map(elm => this.createTeam(elm)).value();
  }
}
