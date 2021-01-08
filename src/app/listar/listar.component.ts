import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  openRegions = false
  openService = false

  onOpenedRegion(){
    this.openRegions = !this.openRegions
  }

  onOpenedService(){
    this.openService = !this.openService
  }

  constructor() { }

  ngOnInit(): void {
  }

}
