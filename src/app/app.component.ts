import { Component, OnInit } from '@angular/core';
import { League } from './models/league.model';
import { Team } from './models/team.model';
import { SearchService } from './services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paris-sportifs';
  league: League;
  leagues: League[] = [];
  team: Team;

  constructor(private _searchService: SearchService ) {}

  ngOnInit() {
    this._searchService.getLeagues().subscribe(data => { this.leagues = data})
  }

  getLeague(leagueSelected) {
    this.league = leagueSelected;
  }

  getTeam(teamSelected) {
    this.team = teamSelected;
  }
}
