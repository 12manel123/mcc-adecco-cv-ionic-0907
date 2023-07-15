import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoluntariadoPage } from './voluntariado.page';

describe('VoluntariadoPage', () => {
  let component: VoluntariadoPage;
  let fixture: ComponentFixture<VoluntariadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoluntariadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
