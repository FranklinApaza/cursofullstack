import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/producto/list/list.component';
import { DetalleComponent } from './components/producto/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const allRoles = ['ADM', 'ALM'];

const routes: Routes = [
  { path: 'prueba/main', component: MainComponent },
  {
    path: 'producto/list', component: ListComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: allRoles }
  },
  {
    path: 'producto/detalle/:id', component: DetalleComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: allRoles }
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
