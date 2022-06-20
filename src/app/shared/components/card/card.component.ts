import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/components/productos/services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() time: string = '';
  @Input() text: string = '';
  @Input() author: string = '';
  @Input() story_url: string = '';
  @Input() id: number = 0;

  flag: boolean = true;
  @Input() src: string = 'assets/img/iconmonstr-favorite-2.svg';

  constructor(private _localStorage: LocalStorageService) {}

  ngOnInit(): void {
    if (this.src == 'assets/img/iconmonstr-favorite-2.svg') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  isOnHeart(id: number) {
    this.flag = !this.flag;
    if (!this.flag) {
      this.src = 'assets/img/iconmonstr-favorite-3.svg';
    } else {
      this.src = 'assets/img/iconmonstr-favorite-2.svg';
    }
    let body;

    body = {
      created_at: this.time,
      story_title: this.text,
      author: this.author,
      story_url: this.story_url,
      id: id,
    };
    this._localStorage.addOrRemoveFavorite(body);
  }

  openWindow(url: string) {
    window.open(url);
  }
}
