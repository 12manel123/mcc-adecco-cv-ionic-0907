import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  experiencia!: any;
  tipoExperiencia!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.experiencia = history.state.experiencia;
    this.tipoExperiencia = history.state.tipo;
  }
}
