import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdenComponent} from './orden/orden.component';


const routes: Routes = [
  { path: 'orden-compra', component: OrdenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
