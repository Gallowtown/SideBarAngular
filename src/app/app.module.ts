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
import { ListartokenComponent } from './listartoken/listartoken.component'

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
    ListartokenComponent
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
