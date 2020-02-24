import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search/search.service';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { League } from '../models/league.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  @Input()
  leagues: League[];
  @Output()
  leagueEvent = new EventEmitter<League>();


  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.queryField.valueChanges
    .pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((query) =>  this.searchService.search(this.leagues, query))
    )
    .subscribe(response => {
      this.results = response;
    });
  }


  emitLeague(league) {
    this.results = [];
    this.leagueEvent.emit(league);
  }
}
