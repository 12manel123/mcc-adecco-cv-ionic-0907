import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

  herramientas: any[];

  constructor(private http: HttpClient) {
    this.herramientas = [];
  }

  ngOnInit(): void {
    this.cargarHerramientas();
  }

  cargarHerramientas(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.herramientas = data.herramientas;
    });
  }

}
