import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DefibrilatorsDataService {
  constructor(private http: HttpClient) {}

  getDefibrilators() {
    return this.http.get('../assets/data/defibrilators_data.json');
  }
}
