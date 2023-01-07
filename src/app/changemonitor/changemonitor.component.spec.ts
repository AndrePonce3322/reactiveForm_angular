import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemonitorComponent } from './changemonitor.component';

describe('ChangemonitorComponent', () => {
  let component: ChangemonitorComponent;
  let fixture: ComponentFixture<ChangemonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangemonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
