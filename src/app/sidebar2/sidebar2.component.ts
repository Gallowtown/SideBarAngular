import { Component, OnInit, Input } from '@angular/core';

export interface Menu {
  code: number;
  name: string;
  navbarType: string;
  url: string;
  icon: string;
  dropdown: Array<Menu>;
}

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  title = 'Sidebar EGC';
  openMenu = true; // esto estaba en false
  posSelected: number = -1;
  posDropdown: number = -1;
  sendNavbar: string = "ninguna"; // variable que recibe el navbar


  selectedMenu: Array<Menu> = [
    {
      code: 1,
      name: "Empresas",
      navbarType: "principal",
      url: 'dash',
      icon: '../assets/test-icon-faucet.png',
      dropdown: []
    },
    {
      code: 2,
      name: "Tarifas",
      navbarType: "principal",
      url: 'empresas',
      icon: '../assets/32x_Empresa.png',
      dropdown: []
    },
    {
      code: 3,
      name: "Macrorrutas",
      navbarType: "principal",
      url: 'dropdown',
      icon: '../assets/32x_Empresa.png',
      dropdown: [
        {
          code: 3.1,
          name: "CPV",
          navbarType: "principal",
          url: 'macrorutascpv',
          icon: '../assets/Tuerca.svg',
          dropdown: []
        },
        {
          code: 3.2,
          name: "Vehiculos",
          navbarType: "principal",
          url: 'macrorutas',
          icon: '../assets/32x_Empresa.png',
          dropdown: []
        }
      ]
    },
    {
      code: 4,
      name: "Calidad",
      navbarType: "principal",
      url: 'listar',
      icon: '../assets/Icono guardar.svg',
      dropdown: []
    },
    {
      code: 5,
      name: "Generar Token",
      navbarType: "principal",
      url: 'generartoken',
      icon: '../assets/32x_Empresa.png',
      dropdown: []
    }
  ]

  selectMenuOption(position: number){
    this.posSelected = position
    console.log(this.posSelected)
  }

  selectMenuOptionDropdown(position: number){
    this.posDropdown = position
    console.log(this.posDropdown)
  }

  toggleSideMenu(openMenuChild: boolean) {
    this.openMenu = openMenuChild
  }

  sendNavbarType(navbarType: string){
    this.sendNavbar = navbarType
  }

  constructor() { }

  ngOnInit(): void {
  }

}
