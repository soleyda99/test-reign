import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/components/productos/services/local-storage.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() select: string = 'Angular';
  @Input() page: number = 1;
  @Output() send = new EventEmitter<boolean>();

  constructor(private _localStorage: LocalStorageService) {}

  ngOnInit(): void {}
  saveFilter() {
    const body = {
      query: this.select,
      page: this.page,
    };
    this._localStorage.initialStorageFilter(body);
  }
}
