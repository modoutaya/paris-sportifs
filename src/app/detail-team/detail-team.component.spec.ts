import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTeamComponent } from './detail-team.component';
import {HttpClientModule} from '@angular/common/http';
import {TeamsService} from '../services/teams/teams.service';

describe('DetailTeamComponent', () => {
  let component: DetailTeamComponent;
  let fixture: ComponentFixture<DetailTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DetailTeamComponent ],
      providers: [TeamsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
