import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtrosConocimientosPage } from './otros-conocimientos.page';

describe('OtrosConocimientosPage', () => {
  let component: OtrosConocimientosPage;
  let fixture: ComponentFixture<OtrosConocimientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtrosConocimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
