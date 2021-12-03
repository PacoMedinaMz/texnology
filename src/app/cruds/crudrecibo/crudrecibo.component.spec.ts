import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudreciboComponent } from './crudrecibo.component';

describe('CrudreciboComponent', () => {
  let component: CrudreciboComponent;
  let fixture: ComponentFixture<CrudreciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudreciboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudreciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
