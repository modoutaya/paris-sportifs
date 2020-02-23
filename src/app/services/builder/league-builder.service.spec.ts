import { TestBed } from '@angular/core/testing';
import { LeagueBuilderService } from './league-builder.service';

describe('LeagueBuilderService', () => {
  let service: LeagueBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueBuilderService]
    });
    service = TestBed.get(LeagueBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create league object', () => {
    const json = {idLeague: 10, strLeague: 'ligue 1', strSport: 'Soccer', strLeagueAlternate: 'Test Ligue 1'};
    const leagueTest = service.createLeague(json);
    expect(leagueTest.id).toEqual(json.idLeague);
    expect(leagueTest.league).toEqual(json.strLeague);
    expect(leagueTest.sport).toEqual(json.strSport);
    expect(leagueTest.leagueAlternate).toEqual(json.strLeagueAlternate);
  })

  it('should create league array', () => {
    const json = [{idLeague: 10, strLeague: 'ligue 1', strSport: 'Soccer', strLeagueAlternate: 'Test Ligue 1'}];
    const leagueArrayTest = service.createMultiLeague(json);
    expect(leagueArrayTest[0].id).toEqual(json[0].idLeague);
    expect(leagueArrayTest[0].league).toEqual(json[0].strLeague);
    expect(leagueArrayTest[0].sport).toEqual(json[0].strSport);
    expect(leagueArrayTest[0].leagueAlternate).toEqual(json[0].strLeagueAlternate);
  })
});
