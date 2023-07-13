import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';//esto
import { CommonModule } from '@angular/common';//esto for
import { FormsModule } from '@angular/forms';//esto Module

@Component({
  selector: 'app-ides',
  templateUrl: './ides.component.html',
  styleUrls: ['./ides.component.scss'],
  standalone: true,//esto
  imports: [IonicModule,CommonModule,FormsModule]//esto //esto for //esto Module

})
export class IdesComponent implements OnInit {
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
