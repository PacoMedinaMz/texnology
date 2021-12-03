import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudrobotComponent } from './crudrobot.component';

describe('CrudrobotComponent', () => {
  let component: CrudrobotComponent;
  let fixture: ComponentFixture<CrudrobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudrobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudrobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
