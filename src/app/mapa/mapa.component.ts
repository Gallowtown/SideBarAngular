import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any;
declare var MarkerWithLabel: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
 
  

  map: any;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor() { }
  
  ngAfterViewInit(): void {
    this.showMap(4.812706, -75.717823)
  }
  ngOnInit(): void {
  }

  showMap(lat: number, lng: number) {
    const options = { center: new google.maps.LatLng(lat, lng), zoom: 15 }
    console.log(this.mapRef, this.mapRef)
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.directionsDisplay.setMap(this.map);
    new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.map,
      title: "Hello World!",
    });
    let marker = new MarkerWithLabel({ position: { lat: lat, lng: lng },
            icon: { url: '../assets/core-icon-editar.png', scaledSize: new google.maps.Size(60, 15) },
            title: "vehicle", map: this.map, labelAnchor: new google.maps.Point(-35, -27),
            });

  }


}
