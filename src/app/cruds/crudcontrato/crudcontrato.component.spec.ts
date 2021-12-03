import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcontratoComponent } from './crudcontrato.component';

describe('CrudcontratoComponent', () => {
  let component: CrudcontratoComponent;
  let fixture: ComponentFixture<CrudcontratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcontratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
