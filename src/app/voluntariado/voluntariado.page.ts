import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.page.html',
  styleUrls: ['./voluntariado.page.scss'],
})
export class VoluntariadoPage implements OnInit {

  voluntariado: any[];

  constructor(private http: HttpClient) {
    this.voluntariado = [];
  }

  ngOnInit(): void {
    this.cargarVoluntariado();
  }

  cargarVoluntariado(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.voluntariado = data.voluntariado;
    });
  }
}
