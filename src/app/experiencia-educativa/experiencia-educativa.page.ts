import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiencia-educativa',
  templateUrl: './experiencia-educativa.page.html',
  styleUrls: ['./experiencia-educativa.page.scss'],
})
export class ExperienciaEducativaPage implements OnInit {
  experienciasEducativas!: any[];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.experienciasEducativas = data.experienciasEducativas;
    });
  }

  verDetalles(experiencia: any): void {
    this.router.navigate(['/detalles'], { state: { experiencia, tipo: 'educativa' } });
  }
}
