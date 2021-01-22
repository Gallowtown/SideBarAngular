import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  title = 'sideBar-Prueba';
  abrirMenu = false;
  menuClosed = true;

  // 

  toggleAbrirMenu(abrirMenuHijo: boolean) {
    this.abrirMenu = abrirMenuHijo
  }

  toggleMenuIcon(MenuIconHijo: boolean) {
    this.menuClosed = MenuIconHijo 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
