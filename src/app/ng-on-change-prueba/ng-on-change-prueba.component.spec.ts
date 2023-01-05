import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangePruebaComponent } from './ng-on-change-prueba.component';

describe('NgOnChangePruebaComponent', () => {
  let component: NgOnChangePruebaComponent;
  let fixture: ComponentFixture<NgOnChangePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangePruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChangePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
