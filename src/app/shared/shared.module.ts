import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductosRoutingModule } from '../components/productos/productos-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    ButtonsComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule],
  exports: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    ButtonsComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
