import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadComponent } from './calidad/calidad.component';
import { CrearComponent } from './crear/crear.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"empresas",
    component:EmpresasComponent
  },
  {
    path:"crear",
    component:CrearComponent
  },
  {
    path:"listar",
    component:ListarComponent
  },
  {
    path:"calidad",
    component:CalidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
