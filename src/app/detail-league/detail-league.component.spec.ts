import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLeagueComponent } from './detail-league.component';

describe('DetailLeagueComponent', () => {
  let component: DetailLeagueComponent;
  let fixture: ComponentFixture<DetailLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
