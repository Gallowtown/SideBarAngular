import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microrrutas',
  templateUrl: './microrrutas.component.html',
  styleUrls: ['./microrrutas.component.css']
})
export class MicrorrutasComponent implements OnInit {

  modalDate = false;

  onModal(){
    this.modalDate = !this.modalDate
  }

  constructor() { }

  ngOnInit(): void {
  }

}
