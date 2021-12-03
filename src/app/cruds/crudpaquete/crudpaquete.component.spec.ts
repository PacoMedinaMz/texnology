import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpaqueteComponent } from './crudpaquete.component';

describe('CrudpaqueteComponent', () => {
  let component: CrudpaqueteComponent;
  let fixture: ComponentFixture<CrudpaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
