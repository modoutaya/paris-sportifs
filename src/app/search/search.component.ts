import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "../services/search/search.service";

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { League } from '../models/league.model';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  selected: boolean = false;
  queryField: FormControl = new FormControl();
  @Input()
  leagues: League[];
  @Output()
  leagueEvent = new EventEmitter<League>();


  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this.queryField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query) =>  this._searchService.search(this.leagues, query))
    )
    .subscribe(response => {
      this.selected = false;
      this.results = response;
    });
  }


  emitLeague(league) {
    this.selected = true;
    this.queryField.setValue(league.league);
    this.leagueEvent.emit(league);
  }
}
