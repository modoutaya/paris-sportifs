import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TeamsService } from './teams.service';
import { TeamBuilderService } from '../builder/team-builder.service';

describe('TeamsService', () => {
  let service: TeamsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsService, TeamBuilderService]
    });
    service = TestBed.inject(TeamsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return teams by league', () => {
    const dumpData = {
      league: {id: 11, league: "Premier League", sport: "soccer", leagueAlternate: "PL test"},
      json: [{
        idTeam: 12, strTeam: "Bundesliga",
        strTeamBanner: "banner test", strCountry: "country test",
        strLeague: "test", strDescriptionFR: "description test", strTeamBadge: "badge test"
      }],
      teams: [{id: 12, name: 'Bundesliga', banner: 'banner test', pays: 'country test',
       championnat: 'test', description: 'description test', badge: 'badge test'}]
    };
    service.getTeamsByLeague(dumpData.league).subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].id).toEqual(dumpData.teams[0].id);
    });

    const call = httpMock.expectOne(`${service.LEAGUE_BASE_URL}?l=${dumpData.league.league}`);
    expect(call.request.method).toBe('GET');
    expect(call.request.url).toBe("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Premier League");
    call.flush({teams: dumpData.json});
  });

  it('should return teams by id', () => {
    const dumpData = {
      id: 11,
      json: [{
        idTeam: 12, strTeam: "Bundesliga",
        strTeamBanner: "banner test", strCountry: "country test",
        strLeague: "test", strDescriptionFR: "description test", strTeamBadge: "badge test"
      }],
      teams: [{id: 12, name: 'Bundesliga', banner: 'banner test', pays: 'country test',
       championnat: 'test', description: 'description test', badge: 'badge test'}]
    };
    service.getTeamById(dumpData.id).subscribe(data => {
      expect(data.id).toBe(dumpData.teams[0].id);
    });

    const call = httpMock.expectOne(`${service.TEAM_BASE_URL}?id=${dumpData.id}`);
    expect(call.request.method).toBe('GET');
    expect(call.request.url).toBe("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=11");
    call.flush({teams: dumpData.json});
  });
});
