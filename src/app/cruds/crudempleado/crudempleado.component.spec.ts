import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudempleadoComponent } from './crudempleado.component';

describe('CrudempleadoComponent', () => {
  let component: CrudempleadoComponent;
  let fixture: ComponentFixture<CrudempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
