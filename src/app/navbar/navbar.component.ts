import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
