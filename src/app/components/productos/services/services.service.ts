import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/config/api';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  isLoading = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getData(query: string, page: number) {
    return this.http
      .get(`${API.reign}search_by_date?query=${query}&page=${page}`)
      .pipe(
        map((data: any) => {
          data.hits.map((element: any) => {
            element.id = element.created_at_i;
            element.src = 'assets/img/iconmonstr-favorite-2.svg';
          });
          return data;
        })
      );
  }

  onSpinner(): void {
    this.isLoading.next(true);
  }

  offSpinner(): void {
    this.isLoading.next(false);
  }
}
