import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datos-personale',
  templateUrl: './datos-personale.page.html',
  styleUrls: ['./datos-personale.page.scss'],
})
export class DatosPersonalePage implements OnInit {

  constructor(private http: HttpClient) {
    this.datosPersonales = {};
  }
  datosPersonales!: any;

  ngOnInit(): void {
    this.cargarDatosPersonales();
  }

  cargarDatosPersonales(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.datosPersonales = data.datosPersonales;
    });
  }

}
