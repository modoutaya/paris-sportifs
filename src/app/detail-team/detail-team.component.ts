import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamsService } from '../services/teams/teams.service';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.css']
})
export class DetailTeamComponent implements OnInit, OnChanges {

  @Input()
  team: Team;
  detailTeam: Team;


  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.detailTeam = this.team;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.teamService.getTeamById(changes.team.currentValue.id)
    .subscribe(response => {
      this.detailTeam = response;
    });
  }

}
