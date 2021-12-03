import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudconvenioComponent } from './crudconvenio.component';

describe('CrudconvenioComponent', () => {
  let component: CrudconvenioComponent;
  let fixture: ComponentFixture<CrudconvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudconvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudconvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
