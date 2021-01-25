import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  title = 'sideBar-Prueba';
  abrirMenu = false;
  menuClosed = true;

  @Input() menuClosedPadre: boolean;
  @Output() ejemplo1 = new EventEmitter<boolean>();

  // 

  toggleAbrirMenu(abrirMenuHijo: boolean) {
    this.abrirMenu = abrirMenuHijo
    this.ejemplo1.emit(abrirMenuHijo)
  }

  toggleMenuIcon(MenuIconHijo: boolean) {
    this.menuClosed = MenuIconHijo 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
