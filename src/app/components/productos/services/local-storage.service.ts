import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter, Hits } from '../interfaces/data.interface';

const MY_FAVORITES: string = 'myFavorites';
const MY_FILTER: string = 'myFilter';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private postFavSubject = new BehaviorSubject<Hits[]>([]);
  private filterSubject = new BehaviorSubject<Hits[]>([]);

  postFav$ = this.postFavSubject.asObservable();
  filterFav$ = this.filterSubject.asObservable();

  constructor() {
    this.initialStorage();
  }
  addFilter(filter: Filter): void {
    try {
      localStorage.setItem(MY_FILTER, JSON.stringify([filter]));
    } catch (error) {
      console.log('Error saving localStorage', error);
    }
  }

  getFilter() {
    try {
      const filterFav = JSON.parse(`${localStorage.getItem(MY_FILTER)}`);
      this.filterSubject.next(filterFav);
      return filterFav;
    } catch (error) {
      console.log('Error getting favorites from localStorage', error);
    }
  }
  addOrRemoveFavorite(post: any): void {
    const { id } = post;
    const currentsFav = this.getFavorites();
    const found = !!currentsFav.find((fav: Hits) => fav.id === id);
    found ? this.removeFromFavorite(id) : this.addToFavorite(post);
  }

  private addToFavorite(post: Hits): void {
    try {
      const currentsFav = this.getFavorites();
      localStorage.setItem(
        MY_FAVORITES,
        JSON.stringify([...currentsFav, post])
      );
      this.postFavSubject.next([...currentsFav, post]);
    } catch (error) {
      console.log('Error saving localStorage', error);
    }
  }

  private removeFromFavorite(id: number): void {
    try {
      const currentsFav = this.getFavorites();
      const posts = currentsFav.filter((item: any) => item.id !== id);
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...posts]));
      this.postFavSubject.next([...posts]);
    } catch (error) {
      console.log('Error removing localStorage', error);
    }
  }

  getFavorites() {
    try {
      const postFav = JSON.parse(`${localStorage.getItem(MY_FAVORITES)}`);
      this.postFavSubject.next(postFav);
      return postFav;
    } catch (error) {
      console.log('Error getting favorites from localStorage', error);
    }
  }

  clearStorage(): void {
    localStorage.clear();
  }

  initialStorageFilter(filter: Filter): void {
    const currentsFilter = JSON.parse(`${localStorage.getItem(MY_FILTER)}`);

    if (!currentsFilter) {
      localStorage.setItem(MY_FILTER, JSON.stringify([]));
    }
    this.addFilter(filter);
  }

  private initialStorage(): void {
    const currents = JSON.parse(`${localStorage.getItem(MY_FAVORITES)}`);

    if (!currents) {
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }
    this.getFavorites();
  }
}
