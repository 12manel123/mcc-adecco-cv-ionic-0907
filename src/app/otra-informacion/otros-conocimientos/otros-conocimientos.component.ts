import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module

@Component({
  selector: 'app-otros-conocimientos',
  templateUrl: './otros-conocimientos.component.html',
  styleUrls: ['./otros-conocimientos.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module

})
export class OtrosConocimientosComponent implements OnInit {
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
