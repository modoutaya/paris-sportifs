import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DetailLeagueComponent } from './detail-league.component';
import {TeamsService} from '../services/teams/teams.service';
import { of } from 'rxjs';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('DetailLeagueComponent', () => {
  let component: DetailLeagueComponent;
  let teamsService: TeamsService;
  let fixture: ComponentFixture<DetailLeagueComponent>;
  let imageEl: DebugElement;
  let dumpData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DetailLeagueComponent ],
      providers: [TeamsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLeagueComponent);
    component = fixture.componentInstance;
    dumpData = [{id: 12, name: 'Bundesliga', banner: 'banner test', pays: 'country test', championnat: 'test',
      description: 'description test', badge: 'badge test'
    }];
    teamsService = TestBed.get(TeamsService);
    spyOn(teamsService, 'getTeamsByLeague').and.returnValue(of(dumpData));
    component.league = {id: 1, league: 'league', leagueAlternate: 'leagueAlternate', sport: 'sport'};
    // component.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTeamsByLeague should be called', () => {
    expect(teamsService.getTeamsByLeague).toHaveBeenCalled();
  });

  it('Should exits', () => {
    expect(component.teams).toEqual(dumpData);
  });

  it('should return true', () => {
    imageEl = fixture.debugElement.query(By.css('.container .row .col-md-5 a img'));
    expect(imageEl.nativeElement.alt).toEqual('Bundesliga badge');
    expect(imageEl.nativeElement.src).toEqual('http://localhost:9876/badge%20test');
  });
});
