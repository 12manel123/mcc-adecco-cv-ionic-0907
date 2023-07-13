import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module

@Component({
  selector: 'app-experiencia-educativa',
  templateUrl: './experiencia-educativa.component.html',
  styleUrls: ['./experiencia-educativa.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module
})
export class ExperienciaEducativaComponent implements OnInit {
  experienciasEducativas: any[];
  categoriaSeleccionada!:any[];
  constructor(private http: HttpClient) {
    this.experienciasEducativas = [];
  }

  ngOnInit(): void {
    this.cargarExperienciasEducativas();
  }

  cargarExperienciasEducativas(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.experienciasEducativas = data.experienciasEducativas;
    });
  }
}
