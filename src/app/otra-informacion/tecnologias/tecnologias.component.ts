import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module

})
export class TecnologiasComponent implements OnInit {
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
