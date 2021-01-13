import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  title = 'sideBar-Prueba';
  abrirMenu = false;
  menuClosed = true;

    

  toggleAbrirMenu() {
    this.abrirMenu = !this.abrirMenu
  }

  toggleMenuIcon() {
    this.menuClosed = !this.menuClosed
  }

  constructor() { }

  ngOnInit(): void {
  }

}
