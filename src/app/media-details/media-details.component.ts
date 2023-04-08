import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MediaService} from "../shared/services/media.service";
import {Subject, takeUntil} from "rxjs";
import {MediaDetails} from "../shared/models/media-details";

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit, OnDestroy{
  mediaDetails?: MediaDetails;
  isLoading = false;
  private destroyed$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute, private mediaService: MediaService) {}

  ngOnInit(): void {
    const mediaId = this.route.snapshot.paramMap.get('id');
    if (mediaId != null) {
      this.isLoading = true;
      this.mediaService.getDetails(mediaId)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((data) => {
          this.mediaDetails = data;
          this.isLoading = false;
        });
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
