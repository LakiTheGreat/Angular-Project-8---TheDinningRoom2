import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LocationItem } from '../model/location-model';
import { RestaurantList } from '../model/restaurant.model';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants(params?: any): Observable<RestaurantList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }
    return this.http.get(`${baseUrl}restaurants`, options).pipe(
      map((data: any) => {
        return new RestaurantList(data);
      })
    );
  }

  getLocations(): Observable<LocationItem[]> {
    return this.http.get(`${baseUrl}locations`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new LocationItem(elem))) || [];
      })
    );
  }
}
