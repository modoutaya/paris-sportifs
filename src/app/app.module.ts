import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { SearchService } from './services/search/search.service';
import { DetailLeagueComponent } from './detail-league/detail-league.component';
import { TeamsService } from './services/teams/teams.service';
import { TeamBuilderService } from './services/builder/team-builder.service';
import { DetailTeamComponent } from './detail-team/detail-team.component';
import { LeagueBuilderService } from './services/builder/league-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailLeagueComponent,
    DetailTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TeamBuilderService,
    LeagueBuilderService,
    SearchService,
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
