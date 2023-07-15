import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otros-conocimientos',
  templateUrl: './otros-conocimientos.page.html',
  styleUrls: ['./otros-conocimientos.page.scss'],
})
export class OtrosConocimientosPage implements OnInit {

  otrosConocimientos: any[];

  constructor(private http: HttpClient) {
    this.otrosConocimientos = [];
  }

  ngOnInit(): void {
    this.cargarOtrosConocimientos();
  }

  cargarOtrosConocimientos(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.otrosConocimientos = data.otrosConocimientos;
    });
  }

}
