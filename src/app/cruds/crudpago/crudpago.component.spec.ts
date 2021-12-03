import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpagoComponent } from './crudpago.component';

describe('CrudpagoComponent', () => {
  let component: CrudpagoComponent;
  let fixture: ComponentFixture<CrudpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
