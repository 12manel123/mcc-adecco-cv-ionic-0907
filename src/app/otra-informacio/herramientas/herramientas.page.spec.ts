import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientasPage } from './herramientas.page';

describe('HerramientasPage', () => {
  let component: HerramientasPage;
  let fixture: ComponentFixture<HerramientasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
