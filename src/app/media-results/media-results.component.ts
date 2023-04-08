// src/app/results/results.component.ts
import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MediaService} from "../shared/services/media.service";
import {MediaSearchRequest} from "../shared/models/media-search-request";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {MessageService} from "primeng/api";
import {MediaDetails} from "../shared/models/media-details";

@Component({
  selector: 'app-media-results',
  templateUrl: './media-results.component.html',
  styleUrls: ['./media-results.component.scss'],
})
export class MediaResultsComponent implements OnChanges, OnDestroy {

  @Input() searchCriteria: any;
  searchCriteria$ = new BehaviorSubject<any>(null);
  offset: number = 0;
  mediaList: any[] = [];
  total: number = 0;
  first: number = 0;
  total$ = new BehaviorSubject<number>(0);
  isLoading: boolean = false;
  rows = 50;
  private destroyed$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mediaService: MediaService,
              private messageService: MessageService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchCriteria && 'searchCriteria' in changes) {
      this.searchCriteria$.next(this.searchCriteria);
      this.fetchResults();
    }
  }

  fetchResults(): void {
    this.isLoading = true;
    this.mediaService.searchMedia(<MediaSearchRequest>{
        countryOne: this.searchCriteria.countryOne,
        countryTwo: this.searchCriteria.countryTwo,
        mediaType: this.searchCriteria.mediaType,
        offset: this.offset
      }
    )
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next:
          (data: any) => {
            this.mediaList = data.media;
            this.isLoading = false;
            if(this.offset == 0) {
              this.total = data.total;
            }
          },
        error:
          () => {
            this.isLoading = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Error Finding Matching Media',
              detail: 'Error Finding Matching Media',
              closable: true,
            })
          }
      });
  }

  goToDetails(media: MediaDetails): void {
    this.router.navigate(['/details', media.nfid]);
  }

  onPageChange(event: any): void {
    this.offset = event.page * this.rows ;
    this.first = this.rows * event.page;
    this.fetchResults();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
