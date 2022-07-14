import { Component, OnInit } from '@angular/core';
import { LocationItem } from '../model/location-model';
import { RestaurantList } from '../model/restaurant.model';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurantList: RestaurantList = new RestaurantList();
  active = 1;
  locations: LocationItem[] = [];
  selectedLocation: string = '';
  selectedCities: string[] = [];

  params = {
    page: 1,
    pageSize: 4,
    sort: 'name',
    sortDirection: 'asc',
    filter: {
      city: '',
      ratingFrom: 1,
      ratingTo: 5,
    },
  };

  constructor(private service: RestaurantsService) {}

  ngOnInit(): void {
    this.getRestaurants();
    this.getLocations();
  }

  getRestaurants(): void {
    this.service.getRestaurants(this.params).subscribe({
      next: (restaurnats: RestaurantList) => {
        // console.log(restaurnats);
        this.restaurantList = restaurnats;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getLocations() {
    this.service.getLocations().subscribe({
      next: (data: LocationItem[]) => {
        console.log(data);
        this.locations = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  findCities() {
    for (let x of this.locations) {
      if (x.country == this.selectedLocation) {
        this.selectedCities = x.cities;
      }
    }
  }

  onLoadMore() {
    this.params.pageSize = this.params.pageSize + 4;
    this.getRestaurants();
  }
}
