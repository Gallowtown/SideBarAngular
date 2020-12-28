import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sideBar-Prueba';
  abrirMenu = false;
  menuClosed = true;


  

  toggleAbrirMenu() {
    this.abrirMenu = !this.abrirMenu
  }

  toggleMenuIcon() {
    this.menuClosed = !this.menuClosed
  }


}
