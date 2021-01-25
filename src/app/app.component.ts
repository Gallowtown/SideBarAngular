import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionejemplo(variable1: any) {
    console.log(variable1)
  }

  title = 'sideBar-Prueba';
  // abrirMenu = false;
  // menuClosed = true;

  // toggleAbrirMenu() {
  //   this.abrirMenu = !this.abrirMenu
  // }

  // toggleMenuIcon() {
  //   this.menuClosed = !this.menuClosed
  // }


}
