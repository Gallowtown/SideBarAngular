import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadComponent } from './calidad/calidad.component';
import { CrRepresentanteComponent } from './cr-representante/cr-representante.component';
import { CrearComponent } from './crear/crear.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { GenerarmacrorutasComponent } from './generarmacrorutas/generarmacrorutas.component';
import { GenerartokenComponent } from './generartoken/generartoken.component';
import { Incumplientos2Component } from './incumplientos2/incumplientos2.component';
import { IncumplimientosComponent } from './incumplimientos/incumplimientos.component';
import { ListarComponent } from './listar/listar.component';
import { ListartokenComponent } from './listartoken/listartoken.component';
import { MacrorutasComponent } from './macrorutas/macrorutas.component';
import { MacrorutascpvComponent } from './macrorutascpv/macrorutascpv.component';
import { MapaComponent } from './mapa/mapa.component';
import { MicrorrutasComponent } from './microrrutas/microrrutas.component';
import { ModalYearComponent } from './modal-year/modal-year.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { RegistrarmicrorutaComponent } from './registrarmicroruta/registrarmicroruta.component';


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
  },
  {
    path:"macrorutascpv",
    component:MacrorutascpvComponent
  },
  {
    path:"macrorutas",
    component:MacrorutasComponent
  },
  {
    path:"generarmacro",
    component:GenerarmacrorutasComponent
  },
  {
    path:"modal",
    component:ModalYearComponent
  },
  {
    path:"micro",
    component:MicrorrutasComponent
  },
  {
    path:"map",
    component:MapaComponent
  },
  {
    path:"microcrear",
    component:RegistrarmicrorutaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
