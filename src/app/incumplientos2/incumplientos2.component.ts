import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incumplientos2',
  templateUrl: './incumplientos2.component.html',
  styleUrls: ['./incumplientos2.component.css']
})
export class Incumplientos2Component implements OnInit {
  tittle = "Incumplimientos"

  tabroutes = "frecuencia"

  changeRoute(newTab: string){
    console.log(newTab)
    this.tabroutes = newTab


  }

  constructor() { }

  ngOnInit(): void {
  }

}
