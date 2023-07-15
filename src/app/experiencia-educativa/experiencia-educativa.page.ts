import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiencia-educativa',
  templateUrl: './experiencia-educativa.page.html',
  styleUrls: ['./experiencia-educativa.page.scss'],
})
export class ExperienciaEducativaPage implements OnInit {

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