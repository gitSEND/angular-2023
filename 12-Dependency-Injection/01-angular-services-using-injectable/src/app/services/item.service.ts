import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable()
export class ItemService {
  observableItems: Observable<Item[]>;
  allItems: Item[] = [];
  selectedItems: Item[] = [];
  errorMessage = '';
  url = "http://localhost:4200/assets/data/products.json";

  constructor(private http: HttpClient) {
    this.observableItems = this.http.get<Item[]>(this.url);
    this.observableItems.subscribe(
      data => this.allItems = data,
      error => this.errorMessage = error);
  }

  getItems(): Observable<Item[]> {
    return this.observableItems;
  }

  getSelectedItems(): Item[] {
    return this.selectedItems;
  }

  addItem(id: number): void {
    const item = this.allItems.find(ob => ob.id === id) ?? {} as Item;
    if (this.selectedItems.indexOf(item) < 0) {
      this.selectedItems.push(item);
    }
  }

  removeItem(id: number): void {
    const item = this.selectedItems.find(ob => ob.id === id) ?? {} as Item;
    const itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1);
  }
}
