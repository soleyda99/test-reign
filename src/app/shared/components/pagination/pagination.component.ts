import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Data } from 'src/app/components/productos/interfaces/data.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input() pageNum: number = 1;
  @Output() pageEnvio = new EventEmitter<number>();
  @Input() data: Data = { hits: [], nbPages: 0, query: '' };
  pagination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public selectItem: number = 1;

  constructor() {}
  ngOnChanges(): void {
    this.selectItem = this.pageNum;
  }
  nextPage() {
    if (this.pageNum < this.pagination.length) {
      this.pageNum++;
      this.sendPage(this.pageNum);
    }
    this.selectItem = this.pageNum;
  }

  prevPage() {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.sendPage(this.pageNum);
    }
    this.selectItem = this.pageNum;
  }

  sendPage(num: number) {
    this.pageEnvio.emit(num);
  }

  move(number: number) {
    this.sendPage(number);
  }
}
