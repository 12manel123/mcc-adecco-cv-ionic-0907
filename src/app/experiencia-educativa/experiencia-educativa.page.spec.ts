import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaEducativaPage } from './experiencia-educativa.page';

describe('ExperienciaEducativaPage', () => {
  let component: ExperienciaEducativaPage;
  let fixture: ComponentFixture<ExperienciaEducativaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExperienciaEducativaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
