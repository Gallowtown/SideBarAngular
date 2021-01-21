import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CalidadComponent } from './calidad/calidad.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrRepresentanteComponent } from './cr-representante/cr-representante.component';
import { GenerartokenComponent } from './generartoken/generartoken.component';
import { ListartokenComponent } from './listartoken/listartoken.component';
import { IncumplimientosComponent } from './incumplimientos/incumplimientos.component';
import { Incumplientos2Component } from './incumplientos2/incumplientos2.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { MacrorutascpvComponent } from './macrorutascpv/macrorutascpv.component';
import { MacrorutasComponent } from './macrorutas/macrorutas.component';
import { GenerarmacrorutasComponent } from './generarmacrorutas/generarmacrorutas.component';
import { ModalYearComponent } from './modal-year/modal-year.component';
import { MicrorrutasComponent } from './microrrutas/microrrutas.component';
import { ModalFrecuenciaComponent } from './modal-frecuencia/modal-frecuencia.component';
import { MapaComponent } from './mapa/mapa.component';
import { RegistrarmicrorutaComponent } from './registrarmicroruta/registrarmicroruta.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpresasComponent,
    ListarComponent,
    CrearComponent,
    CalidadComponent,
    SidebarComponent,
    NavbarComponent,
    CrRepresentanteComponent,
    GenerartokenComponent,
    ListartokenComponent,
    IncumplimientosComponent,
    Incumplientos2Component,
    ReclamosComponent,
    MacrorutascpvComponent,
    MacrorutasComponent,
    GenerarmacrorutasComponent,
    ModalYearComponent,
    MicrorrutasComponent,
    ModalFrecuenciaComponent,
    MapaComponent,
    RegistrarmicrorutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
