import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  data: Data;
  select: string = 'Angular';
  page: number = 1;
  lista: string[] = ['Angular', 'React', 'Vue'];

  constructor(
    private _servicesService: ServicesService,
    private _localStorage: LocalStorageService
  ) {
    this.data = {
      hits: [],
      nbHits: 0,
      page: 1,
      nbPages: 0,
      hitsPerPage: 0,
      exhaustiveNbHits: false,
      exhaustiveTypo: false,
      query: '',
      params: '',
      processingTimeMS: 0,
    };
  }

  ngOnInit(): void {
    this.get(this.select, 1);
  }

  get(query: string, page: number) {
    if (this._localStorage.getFilter() !== null) {
      this.select = this._localStorage.getFilter()[0].query;
      this.page = this._localStorage.getFilter()[0].page;
      this._localStorage.borrarFilter();
    } else {
      this.select = query;
      this.page = page;
    }
    this._servicesService
      .getData(this.select, this.page)
      .subscribe((response: any) => {
        this.data = response;
        let fav = this._localStorage.getFavorites();
        if (fav.length > 0) {
          fav.forEach((element: any) => {
            this.data.hits.forEach((data: any) => {
              if (element.id === data.id) {
                data.src = 'assets/img/iconmonstr-favorite-3.svg';
              }
            });
          });
        }
      });
  }

  frameworks() {
    this.get(this.select, 1);
  }

  sendPage(num: any) {
    this.get(this.select, num);
  }
}
