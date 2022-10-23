import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

//@Input() latitud: number = 0;
//@Input() longitud: number = 0;

  constructor() { }

  ngOnInit(): void {

    
  }

  public zoom = 15;
    
  public position = {
       lat: -31.30,
       lng: -64.24,      
  };


  // public position = {
  //   lat: this.latitud,
  //   lng: this.longitud,      
  // };

}

