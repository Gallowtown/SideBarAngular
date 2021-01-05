import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  validarForm = true
  guardarForm = false

  demosleGuardar() {
    this.guardarForm = true
    this.validarForm = !this.validarForm
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
