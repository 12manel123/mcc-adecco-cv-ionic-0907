import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosPersonalePage } from './datos-personale.page';

describe('DatosPersonalePage', () => {
  let component: DatosPersonalePage;
  let fixture: ComponentFixture<DatosPersonalePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosPersonalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
