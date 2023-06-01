import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/producto/list/list.component';
import { DetalleComponent } from './components/producto/detalle/detalle.component';

const routes: Routes = [
  { path: 'prueba/main', component: MainComponent },
  { path: 'producto/list', component: ListComponent },
  { path: 'producto/detalle/:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
