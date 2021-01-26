import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'sideBar-Prueba';
  abrirMenu = false;
  // menuClosed = true;

  @Output() openedMenu = new EventEmitter<boolean>();
  // @Output() closedIcon = new EventEmitter<boolean>();

  @Input() menuClosedPadre: string;

  toggleAbrirMenu() {
    this.abrirMenu = !this.abrirMenu
    this.openedMenu.emit(this.abrirMenu)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
