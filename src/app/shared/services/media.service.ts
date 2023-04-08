import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MediaSearchRequest} from "../models/media-search-request";
import {MediaDetails} from "../models/media-details";
import {MediaSummary} from "../models/media-summary";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {
  }

  searchMedia(request: MediaSearchRequest): Observable<MediaSummary[]> {
    return this.http.post<MediaSummary[]>(`${environment.apiGatewayUrl}/search`, JSON.stringify(request));
  }

  getDetails(id: string): Observable<MediaDetails> {
    const request = {id: id};
    return this.http.post<MediaDetails>(`${environment.apiGatewayUrl}/details`, JSON.stringify(request));
  }
}
