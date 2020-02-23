import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { League } from '../models/league.model';
import { TeamsService } from '../services/teams/teams.service';

@Component({
  selector: 'app-detail-league',
  templateUrl: './detail-league.component.html',
  styleUrls: ['./detail-league.component.css']
})
export class DetailLeagueComponent implements OnInit, OnChanges {

  @Input()
  league: League;
  @Output()
  public teamEvent = new EventEmitter<string>();
  teams: any[] = [];

  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.teams = [];
    this._getTeams(this.league);
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.teamService.getTeamsByLeague(changes.league.currentValue)
    // .subscribe(response => {
    //   this.teams = response;
    // })
    this._getTeams(changes.league.currentValue);
  }

  emitTeam(team) {
    this.teamEvent.emit(team);
  }

  _getTeams(league) {
    this.teamService.getTeamsByLeague(league)
    .subscribe(response => {
      this.teams = response;
    })
  }

}
