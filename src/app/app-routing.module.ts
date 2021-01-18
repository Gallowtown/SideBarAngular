import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadComponent } from './calidad/calidad.component';
import { CrRepresentanteComponent } from './cr-representante/cr-representante.component';
import { CrearComponent } from './crear/crear.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { GenerartokenComponent } from './generartoken/generartoken.component';
import { Incumplientos2Component } from './incumplientos2/incumplientos2.component';
import { IncumplimientosComponent } from './incumplimientos/incumplimientos.component';
import { ListarComponent } from './listar/listar.component';
import { ListartokenComponent } from './listartoken/listartoken.component';
import { ReclamosComponent } from './reclamos/reclamos.component';


const routes: Routes = [
  {
    path:"dash",
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
  },
  {
    path:"crearrepre",
    component:CrRepresentanteComponent
  },
  {
    path:"listartoken",
    component:ListartokenComponent
  },
  {
    path:"generartoken",
    component:GenerartokenComponent
  },
  {
    path:"incum",
    component:IncumplimientosComponent
  },
  {
    path:"incum2",
    component:Incumplientos2Component
  },
  {
    path:"reclamos",
    component:ReclamosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
