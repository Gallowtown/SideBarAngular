import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  title = 'Sidebar EGC';
  abrirMenu = false;


  toggleAbrirMenu(abrirMenuHijo: boolean) {
    this.abrirMenu = abrirMenuHijo
  }

  constructor() { }

  ngOnInit(): void {
  }

}
