import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnologiasPage } from './tecnologias.page';

describe('TecnologiasPage', () => {
  let component: TecnologiasPage;
  let fixture: ComponentFixture<TecnologiasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnologiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
