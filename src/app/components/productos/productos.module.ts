import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { AllComponent } from './pages/all/all.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyFavesComponent } from './pages/my-faves/my-faves.component';
import { InterceptorService } from './services/interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllComponent, MyFavesComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [ProductosRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
})
export class ProductosModule {}
