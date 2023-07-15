import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.page.html',
  styleUrls: ['./tecnologias.page.scss'],
})
export class TecnologiasPage implements OnInit {

  tecnologias: any[];

  constructor(private http: HttpClient) {
    this.tecnologias = [];
  }

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  cargarTecnologias(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.tecnologias = data.tecnologias;
    });
  }

}
