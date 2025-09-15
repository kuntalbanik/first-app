import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Grocery {
  private items: any[] = [
    {
      id: 1,
      name: 'Tomato',
      description: 'Get fresh tomato',
    },
    {
      id: 2,
      name: 'Potato',
      description: 'Big potatos',
    },
  ];
  
  getItems() {
    return this.items;
  }
}
