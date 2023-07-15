import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ides',
  templateUrl: './ides.page.html',
  styleUrls: ['./ides.page.scss'],
})
export class IdesPage implements OnInit {

  ides: any[];

  constructor(private http: HttpClient) {
    this.ides = [];
  }

  ngOnInit(): void {
    this.cargarIDES();
  }

  cargarIDES(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.ides = data.ides;
    });
  }

}
