import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Menu } from '../model/menu-model';

const baseUrl = 'http://localhost:3000/api/restaurants/';

@Injectable({
  providedIn: 'root',
})
export class MeunService {
  constructor(private http: HttpClient) {}

  getMenu(restaurantId: number): Observable<Menu> {
    return this.http.get(`${baseUrl}${restaurantId}/menus`).pipe(
      map((data: any) => {
        return new Menu(data);
      })
    );
  }
}
