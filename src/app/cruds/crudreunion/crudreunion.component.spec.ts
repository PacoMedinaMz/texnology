import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudreunionComponent } from './crudreunion.component';

describe('CrudreunionComponent', () => {
  let component: CrudreunionComponent;
  let fixture: ComponentFixture<CrudreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudreunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
