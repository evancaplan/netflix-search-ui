import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models/country";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    // const headers = new HttpHeaders({'Cache-Control': 'max-age=604800, PUBLIC'});

    return this.http.get<Country[]>(`${environment.apiGatewayUrl}/countries`);
  }
}
