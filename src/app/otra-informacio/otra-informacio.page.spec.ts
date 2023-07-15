import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtraInformacioPage } from './otra-informacio.page';

describe('OtraInformacioPage', () => {
  let component: OtraInformacioPage;
  let fixture: ComponentFixture<OtraInformacioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtraInformacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
