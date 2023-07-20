import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage implements OnInit {
  experiencias!: any[];
  experienciasFiltradas!: any[];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.experiencias = data.experienciasLaborales;
      this.experienciasFiltradas = [...this.experiencias];
    });
  }

  filtrarExperiencias(categoria: string): void {
    if (categoria === 'Todas') {
      this.experienciasFiltradas = [...this.experiencias];
    } else {
      this.experienciasFiltradas = this.experiencias.filter(
        (experiencia) => experiencia.categoria === categoria
      );
    }
  }
  verDetalles(experiencia: any): void {
    this.router.navigate(['/detalles'], { state: { experiencia, tipo: 'laboral' } });

  }
}
