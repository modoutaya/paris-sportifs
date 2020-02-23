import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DetailLeagueComponent } from './detail-league/detail-league.component';
import { DetailTeamComponent } from './detail-team/detail-team.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamBuilderService } from './services/builder/team-builder.service';
import { LeagueBuilderService } from './services/builder/league-builder.service';
import { SearchService } from './services/search/search.service';
import { TeamsService } from './services/teams/teams.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        DetailLeagueComponent,
        DetailTeamComponent
      ],
      providers: [
        TeamBuilderService,
        LeagueBuilderService,
        SearchService,
        TeamsService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paris-sportifs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('paris-sportifs');
  });
});
