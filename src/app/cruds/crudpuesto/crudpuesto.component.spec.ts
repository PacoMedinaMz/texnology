import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpuestoComponent } from './crudpuesto.component';

describe('CrudpuestoComponent', () => {
  let component: CrudpuestoComponent;
  let fixture: ComponentFixture<CrudpuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
