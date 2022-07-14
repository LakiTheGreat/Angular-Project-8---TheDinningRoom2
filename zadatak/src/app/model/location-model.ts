export class LocationItem {
  _id: number;
  country: string;
  cities: string[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.country = (obj && obj.country) || '';
    this.cities = (obj && obj.cities) || [];
  }
}
