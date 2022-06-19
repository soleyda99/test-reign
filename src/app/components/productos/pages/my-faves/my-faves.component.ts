import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-my-faves',
  templateUrl: './my-faves.component.html',
  styleUrls: ['./my-faves.component.css'],
})
export class MyFavesComponent implements OnInit {
  postFav$ = this._localStorage.postFav$;
  constructor(private _localStorage: LocalStorageService) {}

  ngOnInit(): void {}
}
