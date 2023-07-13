import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module

})
export class HerramientasComponent implements OnInit {
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
