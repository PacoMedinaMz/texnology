import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddatosComponent } from './cruddatos.component';

describe('CruddatosComponent', () => {
  let component: CruddatosComponent;
  let fixture: ComponentFixture<CruddatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruddatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruddatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
