import { Component, Input, OnInit } from '@angular/core';
import { Menu, MenuItem } from '../model/menu-model';
import { MeunService } from '../service/meun.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() restaurantId: number = 0;
  menu: Menu = new Menu();
  appetizers: MenuItem[] = [];
  main: MenuItem[] = [];
  dessert: MenuItem[] = [];

  constructor(private service: MeunService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.service.getMenu(this.restaurantId).subscribe({
      next: (data: Menu) => {
        // console.log(data);
        this.menu = data;
        this.sortAppetizers();
        this.sortMain();
        this.sortDeserts();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  sortAppetizers() {
    for (let item of this.menu.items) {
      if (item.mealType == 'appetizer') {
        // console.log(item);
        this.appetizers.push(item);
      }
    }
  }

  sortMain() {
    for (let item of this.menu.items) {
      if (item.mealType == 'main dish') {
        // console.log(item);
        this.main.push(item);
      }
    }
  }
  sortDeserts() {
    for (let item of this.menu.items) {
      if (item.mealType == 'dessert') {
        // console.log(item);
        this.dessert.push(item);
      }
    }
  }
}
