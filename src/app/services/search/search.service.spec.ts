import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { LeagueBuilderService } from '../builder/league-builder.service';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService, LeagueBuilderService]
    });
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return league', () => {
    const dumpLeagues = {
      leagues: [
        {id: 11, league: "Premier League", sport: "soccer", leagueAlternate: "PL test"},
        {id: 12, league: "Bundesliga", sport: "soccer", leagueAlternate: "Bundesliga test"}
      ]
    };
    service.getLeagues().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dumpLeagues.leagues);
    });

    const call = httpMock.expectOne(service.LEAGUE_BASE_URL);
    expect(call.request.method).toBe('GET');
    expect(call.request.url).toBe('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
    call.flush(dumpLeagues);
  });

  it('Should return league with id = 12', () => {
    const dumpLeagues = [
      {idLeague: 11, strLeague: "Premier League", strSport: "soccer", strLeagueAlternate: "PL test"},
      {idLeague: 12, strLeague: "Bundesliga", strSport: "soccer", strLeagueAlternate: "Bundesliga test"}
    ];
    service.search(dumpLeagues, 'desliga').subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].id).toEqual(12);
    })
  })

});
