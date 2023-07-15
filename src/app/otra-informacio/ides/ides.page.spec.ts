import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdesPage } from './ides.page';

describe('IdesPage', () => {
  let component: IdesPage;
  let fixture: ComponentFixture<IdesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
