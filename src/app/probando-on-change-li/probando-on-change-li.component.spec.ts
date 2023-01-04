import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandoOnChangeLiComponent } from './probando-on-change-li.component';

describe('ProbandoOnChangeLiComponent', () => {
  let component: ProbandoOnChangeLiComponent;
  let fixture: ComponentFixture<ProbandoOnChangeLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbandoOnChangeLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbandoOnChangeLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
