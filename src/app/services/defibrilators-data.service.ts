import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DefibrilatorsDataService {
  constructor(private http: HttpClient) {}

  // Get data from local JSON file
  getDefibrilators() {
    return this.http.get('../assets/data/defibrilators_data.json');
  }

  // Get data from database
  // getDefibrilators() {
  //   return this.http.get('http://localhost:3000/defibrilators');
  // }
}
