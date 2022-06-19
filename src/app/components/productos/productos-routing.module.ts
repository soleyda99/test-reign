import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { MyFavesComponent } from './pages/my-faves/my-faves.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'all', component: AllComponent },
      { path: 'my-faves', component: MyFavesComponent },
      { path: '**', redirectTo: 'all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
