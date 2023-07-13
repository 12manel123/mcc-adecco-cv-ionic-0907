import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module

@Component({
  selector: 'app-voluntariado',
  templateUrl: './voluntariado.component.html',
  styleUrls: ['./voluntariado.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module

})
export class VoluntariadoComponent implements OnInit {
  voluntariado: any[];

  constructor(private http: HttpClient) {
    this.voluntariado = [];
  }

  ngOnInit(): void {
    this.cargarVoluntariado();
  }

  cargarVoluntariado(): void {
    this.http.get<any>('assets/datos.json').subscribe((data) => {
      this.voluntariado = data.voluntariado;
    });
  }
}
