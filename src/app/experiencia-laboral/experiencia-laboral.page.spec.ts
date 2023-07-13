import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaLaboralPage } from './experiencia-laboral.page';

describe('ExperienciaLaboralPage', () => {
  let component: ExperienciaLaboralPage;
  let fixture: ComponentFixture<ExperienciaLaboralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExperienciaLaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
