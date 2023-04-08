// src/app/search/search.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Country} from "../shared/models/country";
import {CountryService} from "../shared/services/country.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {MEDIA_TYPES, MediaType} from "../shared/models/media-type";

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss'],
})
export class MediaSearchComponent implements OnInit, OnDestroy {
  selectedCountryOne?: Country;
  selectedCountryTwo?: Country;
  countries: Country[] = [];
  selectedMediaType?: any;
  mediaTypes = MEDIA_TYPES;
  searchRequest: any = null;
  shouldShowResults = false;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private router: Router, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getCountries()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => this.countries =
        res.sort((a, b) => (a.Name > b.Name) ?
          1 :
          ((b.Name > a.Name) ? -1 : 0)));
  }

  getResults(): void {
    this.searchRequest = {
      countryOne: this.selectedCountryOne?.Id,
      countryTwo: this.selectedCountryTwo?.Id,
      mediaType: this.selectedMediaType?.name,
    }

    this.shouldShowResults = true;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
