import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtareasComponent } from './crudtareas.component';

describe('CrudtareasComponent', () => {
  let component: CrudtareasComponent;
  let fixture: ComponentFixture<CrudtareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudtareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
