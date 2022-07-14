export class MenuItem {
  mealType: string;
  name: string;
  price: number;

  constructor(obj?: any) {
    this.mealType = (obj && obj.mealType) || '';
    this.name = (obj && obj.name) || '';
    this.price = (obj && obj.price) || 0;
  }
}

export class Menu {
  _id: number;
  restaurants: number;
  items: MenuItem[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.restaurants = (obj && obj.restaurants) || '';
    this.items =
      (obj && obj.items && obj.items.map((elem: any) => new MenuItem(elem))) ||
      [];
  }
}
